import React from "react";

import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
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
