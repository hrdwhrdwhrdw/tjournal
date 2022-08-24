import { NextPage } from "next";
import Post from "../components/Post/index";
import { MainLayout } from "../layouts/MainLayout";
import { fetchAllPosts } from "../redux/posts/asyncThunk";
import { PostItem } from "../redux/posts/types";

interface HomeTypes {
  posts: PostItem[];
}

export const Home: NextPage<HomeTypes> = ({ posts }) => {
  
  return (
    <MainLayout>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </MainLayout>
  );
};

Home.getInitialProps = async ({ store }) => {
  try {
    await store.dispatch(fetchAllPosts());
  } catch (error) {
    console.log(error);
  }
  return {
    posts: store.getState().posts.posts,
  };
};

export default Home;
