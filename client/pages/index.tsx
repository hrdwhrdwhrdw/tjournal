import Post from "../components/Post/index";
import { MainLayout } from "../layouts/MainLayout";
import { Api } from "../utils/api/index";
import { NextPage } from "next";
import { PostItem } from "../utils/api/types";

interface HomeProps {
  posts: PostItem[];
}

export const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <MainLayout>
      {posts && posts.map((post) => (
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

export const getServerSideProps = async () => {
  try {
    const posts = await Api().post.getAll();
    return {
      props: {
        posts,
      },
    };
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      posts: null,
    },
  };
};

export default Home;
