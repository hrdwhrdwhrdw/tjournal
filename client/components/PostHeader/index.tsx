import React from "react";
import styles from "./PostHeader.module.scss";
import { PostItem } from "../CommentItem.tsx/index";
import useTimeConvert from "../../hooks/useTimeConvert";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import { Paper, Button } from "@mui/material";

interface PostHeaderTypes {
  post?: PostItem;
}

const PostHeader: React.FC<PostHeaderTypes> = ({ post }) => {
  const { createTime } = useTimeConvert(post.createdAt);
  const [isPopup, setIsPopup] = useState(false);
  return (
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
      <Link href={`/profile/${post.user?.id}`}>
        <span>
          <b>{post.user?.fullName}</b>
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
  );
};

export default PostHeader;
