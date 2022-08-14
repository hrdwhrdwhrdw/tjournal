import { GetServerSideProps, NextPage } from "next";
import React from "react";
import WriteForm from "../../components/WriteForm/index";
import { MainLayout } from "../../layouts/MainLayout";
import { Api } from "../../utils/api/index";
import { PostItem } from '../../utils/api/types';

interface WritePageProps {
  post: PostItem
}

const WritePage: NextPage<WritePageProps> = ({post}) => {
  return (
    <MainLayout hideMenu hideComments className="main-layout-white">
      <div style={{ background: "#fff" }}>
        <WriteForm data={post}/>
      </div>
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
    const user = await Api(ctx).user.getMe();
    if (post?.user.id !== user.id) {
      return {
        props: {},
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
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

export default WritePage;
