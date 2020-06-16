import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src=""
        alt="avatar"
      />
      {props.message}
      <div>
        <span>{props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
