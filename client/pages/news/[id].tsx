import { GetServerSideProps, NextPage } from "next";
import { PostItem } from "../../components/CommentItem.tsx/index";
import FullPost from "../../components/FullPost/index";
import PostComments from "../../components/PostComments";
import { MainLayout } from "../../layouts/MainLayout";
import { Api } from "../../utils/api/index";

interface PostPageProps {
  post: PostItem;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <MainLayout contentFullWidth className="mb-50">
      <FullPost title={post.title} blocks={post.body} />
      <PostComments postId={post.id} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx?.params?.id;
    let post;
    if (id) {
      post = await Api(ctx).post.getOne(+id);
    }
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {},
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default PostPage;
