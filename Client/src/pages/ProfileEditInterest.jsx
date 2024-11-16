import React from "react";
import { FaTrash } from "react-icons/fa";

export default function ProfileEditInterest() {
  return (
    <div className="central-meta">
      <div className="editing-interest">
        <h5 className="f-title">
          <i className="ti-heart"></i>My interests
        </h5>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate
        </p>
        <form method="post">
          <label>Add interests: </label>
          <input type="text" placeholder="Photography, Cycling, traveling." />
          <button type="submit">Add</button>
          <ol className="interest-added">
            <li>
              <a href="#" title="">
                bycicling
              </a>
              <span className="remove" title="remove">
                <FaTrash />
              </span>
            </li>
            <li>
              <a href="#" title="">
                traveling
              </a>
              <span className="remove" title="remove">
                <FaTrash />
              </span>
            </li>
            <li>
              <a href="#" title="">
                photography
              </a>
              <span className="remove" title="remove">
                <FaTrash />
              </span>
            </li>
            <li>
              <a href="#" title="">
                shopping
              </a>
              <span className="remove" title="remove">
                <FaTrash />
              </span>
            </li>
            <li>
              <a href="#" title="">
                eating
              </a>
              <span className="remove" title="remove">
                <FaTrash />
              </span>
            </li>
            <li>
              <a href="#" title="">
                hoteling
              </a>
              <span className="remove" title="remove">
                <FaTrash />
              </span>
            </li>
          </ol>
          <div className="submit-btns">
            <button type="button" className="mtr-btn">
              <span>Cancel</span>
            </button>{" "}
            <button type="button" className="mtr-btn">
              <span>Update</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
