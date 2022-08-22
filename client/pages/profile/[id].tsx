import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from "@mui/icons-material";
import { Avatar, Button, Paper, Tab, Tabs, Typography } from "@mui/material";
import clsx from "clsx";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { ChangeEvent } from "react";
import Post from "../../components/Post/index";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { MainLayout } from "../../layouts/MainLayout";
import { ResponseUser } from "../../redux/users/types";
import { selectUserData, setUserData } from "../../redux/users/userSlice";
import { Api } from "../../utils/api/index";
import { ISOConverter } from "../../utils/ISOConverter";
import styles from "./Profile.module.scss";

interface ProfileProps {
  profile: ResponseUser;
}

const Profile: NextPage<ProfileProps> = ({ profile }) => {
  const user = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files[0];
      const data = await Api().user.upload(file);
      dispatch(setUserData(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
        <div className="d-flex justify-between">
          <div>
            <div className={styles.image}>
              <img
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 8,
                  cursor: "zoom-in",
                  position: "absolute",
                }}
                alt=""
                src={
                  profile?.imageUrl
                    ? `/static/${profile.imageUrl}`
                    : profile?.fullName[0]
                }
              />
              <Button
                className={clsx(styles.button, {
                  [styles.hidden]: user.id !== profile.id,
                })}
                variant="contained"
                style={{ width: 28, height: 24 }}
              >
                <label htmlFor="button-file" className={styles.label}>
                  <svg viewBox="0 0 13 13" id="ui_photo" width={16} height={16}>
                    <path d="M4.363 3.073a1.301 1.301 0 100 2.602 1.301 1.301 0 000-2.602zM12.233 0H.768A.768.768 0 000 .768V11.42c0 .425.344.768.768.768H12.232A.768.768 0 0013 11.42V.768A.767.767 0 0012.233 0zM11.08 10.651H4.862l4.296-4.505L11.464 8.4v1.868a.384.384 0 01-.384.384zM9.791 4.938a.758.758 0 00-.633-.328.755.755 0 00-.544.22c-.027.028-.048.057-.07.086L3.01 10.652H1.92a.384.384 0 01-.384-.384V1.92c0-.212.172-.384.384-.384h9.16c.212 0 .384.172.384.384v4.69L9.791 4.938z"></path>
                  </svg>
                </label>
              </Button>
              <input
                type="file"
                id="button-file"
                onChange={(e) => handleUpload(e)}
                hidden
              />
            </div>
            <Typography
              style={{ fontWeight: "bold" }}
              className="mt-10"
              variant="h4"
            >
              {profile.fullName}
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained"
                disabled={user.id !== profile.id}
              >
                <SettingsIcon />
              </Button>
            </Link>
            <Button
              style={{ height: 42 }}
              variant="contained"
              color="primary"
              disabled={user.id === profile.id}
            >
              <MessageIcon className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
        <div className="d-flex mb-10 mt-10">
          <Typography
            style={{ fontWeight: "bold", color: "#35AB66" }}
            className="mr-15"
          >
            +208
          </Typography>
          <Typography>2 подписчика</Typography>
        </div>
        <Typography>
          На проекте с {ISOConverter.format(profile.createdAt, true)}
        </Typography>
        <Tabs
          className="mt-20"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="mr-20 flex mt-0">
          <Post id={0} title={""} description={""} />
        </div>
        <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
          <b>Подписчики</b>
          <div className="d-flex mt-15">
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
            <Avatar
              className="mr-10"
              src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
            />
          </div>
        </Paper>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx?.params?.id;
    let profile;
    if (id) {
      profile = await Api(ctx).user.getOne(+id);
    }
    return {
      props: {
        profile,
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

export default Profile;
