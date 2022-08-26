import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { PostItem } from "../../redux/posts/types";
import Post from "../Post";
import { Api } from "../../utils/api/index";

interface MyPostsType {
  id: number;
}

const MyPosts: React.FC<MyPostsType> = ({ id }) => {
  const [myPosts, setMyPosts] = useState<PostItem[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const posts = await Api().post.getAllById(id);
        setMyPosts(posts);
      } catch (error) {
        console.log("get comments", error);
      }
    })();
  }, []);
  return (
    <div>
      {myPosts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default MyPosts;
