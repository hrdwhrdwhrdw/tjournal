import React from "react";
import { IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

interface PostActionsType {
  commentsCount: number;
}

const PostActions: React.FC<PostActionsType> = ({ commentsCount }) => {
  return (
    <ul style={styles}>
      <li>
        {commentsCount}
        <IconButton>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <AutorenewIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <IosShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};

export default PostActions;
