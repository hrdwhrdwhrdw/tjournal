import React, { useState } from "react";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

const FollowButton = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <Button
      onClick={() => setFollowed(!followed)}
      variant="contained"
      style={{ minWidth: 30, width: 35, height: 30 }}
    >
      {followed ? (
        <CheckIcon style={{ color: "red", fontSize: 14 }} />
      ) : (
        <AddIcon style={{ color: "green", fontSize: 14 }} />
      )}
    </Button>
  );
};

export default FollowButton;
