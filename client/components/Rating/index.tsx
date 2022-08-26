import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from './Rating.module.scss';

const Rating = () => {
  return (
    <div className={styles.rating}>
      <KeyboardArrowDownIcon />
      <span className={styles.ratingInner}>110</span>
      <KeyboardArrowUpIcon />
    </div>
  );
};

export default Rating;
