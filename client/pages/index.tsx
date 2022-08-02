import Post from '../components/Post/index';
import { MainLayout } from '../layouts/MainLayout';

const Home:React.FC = () => {
  return (
    <MainLayout>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </MainLayout>
  );
};

export default Home;
