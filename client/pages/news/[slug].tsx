import { MainLayout } from "../../layouts/MainLayout";
import FullPost from "../../components/FullPost/index";
import PostComments from "../../components/PostComments";
import data from "../../data";

const Post: React.FC = () => {
  return (
    <MainLayout contentFullWidth className="mb-50">
      <FullPost />
      <PostComments />
    </MainLayout>
  );
};

export default Post;
