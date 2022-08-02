import React from "react";
import { Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./Comment.module.scss";

const Comment: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
          alt=""
          className={styles.image}
        />
        <div className="d-flex flex-column">
          <b>Добряк злой</b>
          <span>6 часов</span>
        </div>
      </div>
      <Typography className={styles.text}>
        Имперцы - опухоль человечества
      </Typography>
      <Button disableRipple className={styles.replyButton}>
        Ответить
      </Button>
      <IconButton
        onClick={handleClick}
        disableRipple
        className={styles.replyButton}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Ответить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};

export default Comment;
