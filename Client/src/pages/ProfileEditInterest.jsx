import { useMutation, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  ADD_USER_INTERESTS,
  REMOVE_USER_INTEREST,
} from "../utilities/graphql_mutations";
import { toast } from "react-toastify";
import { handleApolloErrors } from "../utilities/utilities";
import { GET_USER_INTERESTS } from "../utilities/graphql_queries";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function ProfileEditInterest() {
  const { auth } = useContext(AuthContext);
  const { profileId } = useParams();
  const [interest, setInterest] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      if (profileId !== auth.user?._id) {
        navigate(`profile/${auth.user?._id}/timeline`, { replace: true });
      }
    }
  }, [profileId, auth, navigate]);

  const [addInterest] = useMutation(ADD_USER_INTERESTS, {
    update(cache, { data: { addInterests } }) {
      cache.modify({
        fields: {
          allInterests(existingInterests = []) {
            return addInterests;
          },
        },
      });
    },
  });

  const [removeInterest] = useMutation(REMOVE_USER_INTEREST, {
    update(cache, { data: { removeInterest } }) {
      cache.modify({
        fields: {
          allInterests(existingInterests = []) {
            return removeInterest;
          },
        },
      });
    },
  });

  const { loading, error, data } = useQuery(GET_USER_INTERESTS, {
    variables: {
      profileId,
    },
  });

  const handleAddInterest = async (e) => {
    e.preventDefault();

    if (interest.length < 3) {
      return toast.error("Interest must be 3 or morencharacters long");
    }

    try {
      const { data } = await addInterest({
        variables: {
          interest,
        },
      });
      if (data) {
        setInterest("");
        toast.success("Interest added successfully!!!");
      }
    } catch (error) {
      handleApolloErrors(error);
    }
  };

  const handleRemoveInterest = async (interest) => {
    try {
      const { data } = await removeInterest({
        variables: {
          interest,
        },
      });

      if (data) {
        toast.success("Interest removed successfully!!!");
      }
    } catch (error) {
      handleApolloErrors(error);
    }
  };

  return (
    <div className="central-meta">
      <div className="editing-interest">
        <h5 className="f-title">
          <i className="ti-heart"></i>My interests
        </h5>
        {error && <p>An error occurred {error.message}</p>}
        {loading && (
          <SkeletonTheme height={40}>
            <Skeleton count={5} />
          </SkeletonTheme>
        )}
        {data && (
          <>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate
            </p>
            <form onSubmit={handleAddInterest}>
              <label>Add interests: </label>
              <input
                type="text"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="Photography, Cycling, traveling."
              />
              <button type="submit">Add</button>
              <ol className="interest-added">
                {data.allInterests.interests.map((interest, index) => (
                  <li key={index}>
                    <a href="#" title={interest}>
                      {interest}
                    </a>
                    <span
                      className="remove"
                      title="remove"
                      onClick={() => handleRemoveInterest(interest)}
                    >
                      <FaTrash />
                    </span>
                  </li>
                ))}
              </ol>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
