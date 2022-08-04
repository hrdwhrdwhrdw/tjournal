import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./SideComments.module.scss";
import clsx from "clsx";
import data from "../../data";
import { CommentItem } from "../CommentItem.tsx/index";

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightAltIcon />
      </h3>
      {visible &&
        data.comments.popular.map((obj) => (
          <CommentItem key={obj.user.id} {...obj} />
        ))}
    </div>
  );
};
