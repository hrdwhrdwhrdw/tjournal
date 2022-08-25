import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import useTimeConvert from "../../hooks/useTimeConvert";
import { CommentItem } from "../../utils/api/types";
import { PostItem } from "../CommentItem.tsx/index";
import PostActions from "../PostActions";
import PostAuthor from "../PostAuthor";
import styles from "./FullPost.module.scss";
import { useState } from "react";

interface FullPostType {
  post: PostItem;
  comments: CommentItem[];
}

const FullPost: React.FC<FullPostType> = ({ post, comments }) => {
  const { createTime } = useTimeConvert(post.createdAt);
  const [isPopup, setIsPopup] = useState(true);

  return (
    <Paper className={styles.paper} elevation={0}>
      <div className="container">
        <div className={styles.postHeader}>
          <div className={styles.tag}>
            <img
              className={styles.tagImage}
              src="	https://leonardo.osnova.io/87e61880-a0b1-32ee-614f-49500608c2be/-/scale_crop/64x64/-/format/webp/"
              alt=""
            />
            <span>
              <b>Офтоп</b>
            </span>
          </div>
          <Link href={`/profile/${post.user.id}`}>
            <span>
              <b>{post.user.fullName}</b>
            </span>
          </Link>
          <div className={styles.createTime}>{createTime}</div>
          <div className={styles.popupWrapper}>
            <MoreHorizIcon onClick={() => setIsPopup(!isPopup)} />
            {isPopup && (
              <Paper className={styles.popup}>
                <Button>Пожаловаться</Button>
              </Paper>
            )}
          </div>
        </div>
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
          <PostActions commentsCount={comments.length} />
          <div className={styles.rating}>
            <KeyboardArrowDownIcon />
            <span className={styles.ratingInner}>110</span>
            <KeyboardArrowUpIcon />
          </div>
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
