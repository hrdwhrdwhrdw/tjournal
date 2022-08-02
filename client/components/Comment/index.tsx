import React from "react";
import { Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./Comment.module.scss";

type CommentPostProps = {
  user: {
    fullName: string;
    avatar: string;
  };
  text: string;
  createdAt: string;
};

const Comment: React.FC<CommentPostProps> = ({ user, text, createdAt }) => {
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
        <img src={user.avatar} alt="" className={styles.image} />
        <div className="d-flex flex-column">
          <b>{user.fullName}</b>
          <span>{createdAt}</span>
        </div>
      </div>
      <Typography className={styles.text}>
        {text}
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
