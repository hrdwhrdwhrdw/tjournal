import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { CommentItem } from "../../utils/api/types";
import { PostItem } from "../CommentItem.tsx/index";
import PostAuthor from "../PostAuthor";
import PostFooter from "../PostFooter";
import PostHeader from "../PostHeader";
import styles from "./FullPost.module.scss";

interface FullPostType {
  post: PostItem;
  comments: CommentItem[];
}

const FullPost: React.FC<FullPostType> = ({ post, comments }) => {
  
  return (
    <Paper className={styles.paper} elevation={0}>
      <div className="container">
        <PostHeader post={post} />
        <Typography className={styles.title} variant="h5">
          {post.title}
        </Typography>
        {post.body.map((obj) => (
          <Typography
            key={obj.id}
            dangerouslySetInnerHTML={{ __html: obj.data.text }}
          />
        ))}
        <span className={styles.views}>{post.views} просмотров</span>
        <div className={styles.postActions}>
          <PostFooter commentsCount={comments.length} />
        </div>
        <div className={styles.userInfoWrapper}>
          <div className={styles.userInfo}>
            <PostAuthor authorId={post.user.id} />
          </div>
          <div className="df-flex align-center">
            <Button variant="contained" className="mr-10">
              <ChatBubbleOutlineIcon />
            </Button>
            <Button variant="contained" className={styles.subscribeButton}>
              <PersonAddIcon />
              <b className="ml-10">Подписаться</b>
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default FullPost;
