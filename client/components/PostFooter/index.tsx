import React from "react";
import PostActions from "../PostActions";
import Rating from "../Rating";

interface PostFooterTypes {
  commentsCount?: number;
}

const PostFooter: React.FC<PostFooterTypes> = ({ commentsCount }) => {
  return (
    <div className="d-flex justify-between align-center w100p">
      <PostActions commentsCount={commentsCount} />
      <Rating />
    </div>
  );
};

export default PostFooter;
