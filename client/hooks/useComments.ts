import { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { CommentItemType } from "../utils/api/types";
import { Api } from "../utils/api/index";

type UseCommentsProps = {
  comments: CommentItemType[];
  setComments: Dispatch<SetStateAction<CommentItemType[]>>;
};

const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = useState<CommentItemType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const comments = await Api().comment.getAll(postId);
        setComments(comments);
      } catch (error) {
        console.log("get comments", error);
      }
    })();
  }, []);
  
  return { comments, setComments };
};

export default useComments;
