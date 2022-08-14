import { NextPage } from "next";
import WriteForm from "../../components/WriteForm/index";
import { MainLayout } from "../../layouts/MainLayout";

const WritePage: NextPage = () => {
  return (
    <MainLayout hideMenu hideComments className="main-layout-white">
      <div style={{ background: "#fff" }}>
        <WriteForm />
      </div>
    </MainLayout>
  );
};

export default WritePage;
