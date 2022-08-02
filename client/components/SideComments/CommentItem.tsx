import React from "react";
import styles from "./SideComments.module.scss";
import Link from "next/link";
import { Avatar } from "@mui/material";

export const CommentItem: React.FC = () => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>Вася Пупкин</Avatar>
        {/* <Link href={`/profile/${user.id}`}> */}
        <a>
          <b>Вася Пупкин</b>
        </a>
        {/* </Link> */}
      </div>
      <p className={styles.text}>Привет, я Вася</p>
      {/* <Link href={`/news/${post.id}`}> */}
      <a>
        <span className={styles.postTitle}>Текст Поста</span>
      </a>
      {/* </Link> */}
    </div>
  );
};
