import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { ResponseUser } from "../../redux/auth/types";
import { Api } from "../../utils/api";
import styles from "./Comment.module.scss";
import { timeSince } from "../../utils/timeSince";
import { useState } from "react";

type CommentPostProps = {
  user: ResponseUser;
  text: string;
  createdAt: string;
  currentUserId?: number;
  id: number;
  userId: number;
  isProfile?: boolean;
  onRemoveItem?: (id: number) => void;
  onCommentEdit?: (id: number, text: string) => void;
};

const Comment: React.FC<CommentPostProps> = ({
  id,
  user,
  userId,
  text,
  createdAt,
  currentUserId,
  isProfile,
  onRemoveItem,
  onCommentEdit,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickEdit = () => {
    onCommentEdit(id, text);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRemove = async () => {
    try {
      await Api().comment.remove(id);
      onRemoveItem(id);
    } catch (error) {
      console.log(error);
    } finally {
      handleClose();
    }
  };

  const timeAgo = timeSince(createdAt).split(" ").slice(0, 2).join(" ");

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Link href={`/profile/${user.id}`}>
          <a>
            <Avatar className="mr-10" src={`/static/${user.imageUrl}`}>
              {!user.imageUrl && user.fullName[0]}
            </Avatar>
          </a>
        </Link>
        <div className="d-flex flex-column">
          <b>{user.fullName}</b>
          <span>{timeAgo}</span>
        </div>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      <Button disableRipple className={styles.replyButton}>
        Ответить
      </Button>
      {currentUserId === userId && (
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
            {!isProfile && (
              <MenuItem onClick={handleClickEdit}>Редактировать</MenuItem>
            )}
          </Menu>
        </>
      )}
    </div>
  );
};

export default Comment;
