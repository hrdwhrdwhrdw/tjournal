import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import clsx from "clsx";
import React from "react";
import useComments from "../../hooks/useComments";
import { CommentItem } from "../CommentItem.tsx/index";
import Skeleton from "../Skeleton";
import styles from "./SideComments.module.scss";
import {useState} from 'react';

export const SideComments = () => {
  const [visible, setVisible] = useState(true);
  const { comments } = useComments();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightAltIcon />
      </h3>
      {!comments.length && (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
      {visible &&
        comments.map((obj) => <CommentItem key={obj.user.id} {...obj} />)}
    </div>
  );
};
