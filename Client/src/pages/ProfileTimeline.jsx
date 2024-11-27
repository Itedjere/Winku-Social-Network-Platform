import { useParams } from "react-router-dom";
import PostForm from "../components/Post/PostForm";
import Posts from "../components/Post/Posts";
import { useQuery } from "@apollo/client";
import { GET_USER_POSTS } from "../utilities/graphql_queries";

export default function ProfileTimeline() {
  let { profileId } = useParams();
  const { loading, error, data } = useQuery(GET_USER_POSTS, {
    variables: {
      profileId,
    },
    pollInterval: 500,
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <PostForm />
      <Posts posts={data.userPosts} />
    </>
  );
}
