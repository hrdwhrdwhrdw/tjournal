import { Avatar, Paper } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PostItem } from "../../redux/posts/types";
import { Api } from "../../utils/api/index";
import CreatePostButton from "../CreatePost";
import Post from "../Post";
import styles from "./ProfilePosts.module.scss";
import Preloader from "../Preloader/index";

interface ProfilePostsType {
  id: number;
  imageUrl: string;
}

const ProfilePosts: React.FC<ProfilePostsType> = ({ id, imageUrl }) => {
  const [posts, setMyPosts] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const posts = await Api().post.getAllById(id);
        setMyPosts(posts);
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
      {!posts.length && !isLoading && (
        <>
          <Paper className="mb-20 p-20" elevation={0}>
            <div className={styles.createPostBlock}>
              <Avatar
                src={`/static/${imageUrl}`}
                className={styles.createPostAvatar}
              />
              <Link href="/write">
                <input type="text" placeholder="Новая запись" readOnly />
              </Link>
            </div>
            <div className="d-flex">
              <Link href="/write">
                <a className={styles.postLinks}>
                  <svg viewBox="0 0 24 24" id="v_image">
                    <path d="M8 9.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 3a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7zM5 7a2 2 0 012-2h10a2 2 0 012 2v5.252l-1.478-1.477a2 2 0 00-3.014.214L8.5 19H7a2 2 0 01-2-2V7zm11.108 5.19L19 15.08V17a2 2 0 01-2 2h-6l5.108-6.81z"
                    ></path>
                  </svg>{" "}
                  Фото и видео
                </a>
              </Link>
              <Link href="/write">
                <a className={styles.postLinks}>
                  <svg viewBox="0 0 24 24" id="v_link" className={styles.blue}>
                    <path
                      fill-rule="evenodd"
                      d="M12.344 4.446A5.092 5.092 0 0115.94 3a5.093 5.093 0 013.57 1.509 5.157 5.157 0 011.494 3.587 5.159 5.159 0 01-1.43 3.614l-.013.012-2.465 2.485a5.08 5.08 0 01-6.068.878 5.12 5.12 0 01-1.641-1.434 1 1 0 011.606-1.192c.267.361.608.659 1 .874a3.086 3.086 0 003.683-.535l2.459-2.478a3.159 3.159 0 00.87-2.206 3.158 3.158 0 00-.914-2.197A3.093 3.093 0 0015.923 5a3.092 3.092 0 00-2.18.874l-1.408 1.411a1 1 0 11-1.415-1.413l1.413-1.416.01-.01z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M8.733 8.605a5.08 5.08 0 014.24.306 5.118 5.118 0 011.641 1.434 1 1 0 01-1.606 1.192 3.119 3.119 0 00-1-.874 3.084 3.084 0 00-3.683.535l-2.46 2.478a3.159 3.159 0 00-.869 2.207c.007.826.336 1.614.913 2.196.577.582 1.356.91 2.169.917a3.092 3.092 0 002.178-.873l1.399-1.41a1 1 0 111.42 1.409l-1.406 1.416-.012.012a5.092 5.092 0 01-3.596 1.446 5.093 5.093 0 01-3.571-1.508A5.158 5.158 0 012.996 15.9a5.158 5.158 0 011.432-3.614l.012-.012 2.465-2.485a5.106 5.106 0 011.828-1.184z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Ссылка
                </a>
              </Link>
            </div>
          </Paper>
          <Paper
            elevation={0}
            className="pt-50 pb-50 d-flex flex-column align-center justify-center"
          >
            <span className="mb-20">
              Напишите первую статью, чтобы привлечь читателей в ваш блог
            </span>
            <CreatePostButton />
          </Paper>
        </>
      )}
      {posts && posts.map((post) => <Post post={post} />)}
    </div>
  );
};

export default ProfilePosts;
