import React from "react";
import { useEffect, useState } from "react";
import { Api } from "../../utils/api/index";
import { ResponseUser } from "../../redux/auth/types";

interface PostAuthorType {
  authorId: number;
}

const PostAuthor: React.FC<PostAuthorType> = ({ authorId }) => {
  const [author, setAuthor] = useState<ResponseUser | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const author = await Api().user.getOne(authorId);
        setAuthor(author);
      } catch (error) {
        console.log("set author", error);
      }
    })();
  }, []);

  return (
    <>
      <img src={`/static/${author?.imageUrl}`} alt="avatar" />
      <b>{author?.fullName}</b>
      <span>
        {author?.commentsCount > 0 ? (
          <span>+{author?.commentsCount * 2 + author?.postsCount * 3}</span>
        ) : (
          "0"
        )}
      </span>
    </>
  );
};

export default PostAuthor;
