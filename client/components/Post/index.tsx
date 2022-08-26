import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { PostItem } from "../CommentItem.tsx/index";
import PostFooter from "../PostFooter";
import PostHeader from "../PostHeader";
import styles from "./Post.module.scss";

type PostType = {
  post: PostItem;
};

const Post: React.FC<PostType> = ({ post }) => {
  return (
    <Paper className={styles.paper}>
      <PostHeader post={post} />
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${post?.id}`}>
          <a>{post?.title}</a>
        </Link>
      </Typography>
      <Typography className="mt-15 mb-15">{post?.description}</Typography>
      <PostFooter commentsCount={post.commentsCount}/>
    </Paper>
  );
};

export default Post;
