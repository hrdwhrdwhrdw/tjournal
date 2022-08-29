import { Paper } from "@mui/material";
import React, { useState } from "react";
import { PostItem } from "../../redux/posts/types";
import Post from "../Post";
import CreatePostButton from "../CreatePost/index";

interface MyPostsType {
  id: number;
}

const ProfileDrafts: React.FC<MyPostsType> = ({ id }) => {
  const [myPosts, setMyPosts] = useState<PostItem[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const posts = await Api().post.getAllById(id);
  //       setMyPosts(posts);
  //     } catch (error) {
  //       console.log("get comments", error);
  //     }
  //   })();
  // }, []);
  return (
    <div>
      {!myPosts.length && (
        <>
          <Paper
            elevation={0}
            className="pt-50 pb-50 d-flex flex-column align-center justify-center"
          >
            <span className="mb-20">У вас нет черновиков</span>
            <CreatePostButton />
          </Paper>
        </>
      )}
      {myPosts && myPosts.map((post) => <Post post={post} />)}
    </div>
  );
};

export default ProfileDrafts;
