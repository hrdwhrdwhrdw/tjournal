import { GetServerSideProps, NextPage } from "next";
import { PostItem } from "../../components/CommentItem.tsx/index";
import FullPost from "../../components/FullPost/index";
import PostComments from "../../components/PostComments";
import { MainLayout } from "../../layouts/MainLayout";
import { Api } from "../../utils/api/index";
import useComments from "../../hooks/useComments";

interface PostPageProps {
  post: PostItem;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const { comments, setComments } = useComments(post.id);
  
  return (
    <MainLayout contentFullWidth className="mb-50">
      <FullPost post={post} comments={comments} />
      <PostComments
        postId={post.id}
        comments={comments}
        setComments={setComments}
      />
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
