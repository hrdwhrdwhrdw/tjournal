import React from "react";
import {
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./Comment.module.scss";
import { ResponseUser } from "../../utils/api/types";
import { Api } from "../../utils/api";

type CommentPostProps = {
  user: ResponseUser;
  text: string;
  createdAt: string;
  currentUserId?: number;
  id: number;
  onRemoveItem:(id: number) => void;
};

const Comment: React.FC<CommentPostProps> = ({
  id,
  user,
  text,
  createdAt,
  currentUserId,
  onRemoveItem
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRemove = async () => {
    try {
      await Api().comment.remove(id);
      onRemoveItem(id)
    } catch (error) {
      console.log(error);
    } finally {
      handleClose();
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar className="mr-10">{user.fullName[0]}</Avatar>
        <div className="d-flex flex-column">
          <b>{user.fullName}</b>
          <span>{createdAt}</span>
        </div>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      <Button disableRipple className={styles.replyButton}>
        Ответить
      </Button>

      {currentUserId === user.id && (
        <>
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
            <MenuItem onClick={handleClickRemove}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};

export default Comment;
