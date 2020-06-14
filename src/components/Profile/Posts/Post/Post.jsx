import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://i.pinimg.com/736x/a0/66/3a/a0663ad917c9446ad219aea51670d100.jpg"
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
