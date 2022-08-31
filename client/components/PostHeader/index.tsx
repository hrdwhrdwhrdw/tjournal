import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, Paper } from "@mui/material";
import Link from "next/link";
import React, { useRef } from "react";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import useTimeConvert from "../../hooks/useTimeConvert";
import { PostItem } from "../CommentItem.tsx/index";
import styles from "./PostHeader.module.scss";

interface PostHeaderTypes {
  post?: PostItem;
}

const PostHeader: React.FC<PostHeaderTypes> = ({ post }) => {
  const { createTime } = useTimeConvert(post.createdAt);
  const ref = useRef(null);
  const { isPopup, setIsPopup } = useOutsideClickHandler(ref);
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
        <MoreHorizIcon onClick={() => setIsPopup(!isPopup)} ref={ref} />
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
