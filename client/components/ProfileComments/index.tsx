import { CircularProgress, Paper } from "@mui/material";
import React, { useState } from "react";
import { Api } from "../../utils/api/index";
import { useEffect } from "react";
import { CommentItemType } from "../../utils/api/types";
import Comment from "../Comment";
import Preloader from "../Preloader";

interface ProfileCommentsType {
  id: number;
  userId: number;
}

const ProfileComments: React.FC<ProfileCommentsType> = ({ id, userId }) => {
  const [myComments, setMyComments] = useState<CommentItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const comments = await Api().comment.getAllById(id);
        setMyComments(comments);
      } catch (error) {
        console.log("get comments", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <div>
      {isLoading && <Preloader />}
      {!myComments.length && !isLoading && (
        <>
          <Paper className="mb-20 p-50 text-center" elevation={0}>
            <span>Вы еще не оставили ни одного комментария</span>
          </Paper>
        </>
      )}
      {myComments &&
        myComments.map((comment) => (
          <Paper className="mb-10" elevation={0} style={{borderRadius: 8}}>
            <Comment
              id={comment.id}
              userId={userId}
              user={comment.user}
              text={comment.text}
              createdAt={comment.createdAt}
              currentUserId={comment.user.id}
            />
          </Paper>
        ))}
    </div>
  );
};

export default ProfileComments;
