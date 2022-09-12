import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from "@mui/icons-material";
import { Avatar, Button, Paper, Tab, Tabs, Typography } from "@mui/material";
import clsx from "clsx";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { MainLayout } from "../../layouts/MainLayout";
import { ResponseUser } from "../../redux/auth/types";
import { selectAuthData, setAuthData } from "../../redux/auth/authSlice";
import { Api } from "../../utils/api/index";
import { ISOConverter } from "../../utils/ISOConverter";
import styles from "./Profile.module.scss";
import ProfilePosts from "../../components/ProfilePosts/index";
import ProfileComments from "../../components/ProfileComments/index";
import ProfileDrafts from "../../components/ProfileDrafts/index";
import ProfileDonates from "../../components/ProfileDonates/index";
import ProfileMore from "../../components/ProfileMore/index";
import { setProfileData } from "../../redux/profile/profileSlice";

interface ProfileProps {
  profile: ResponseUser;
}

const Profile: NextPage<ProfileProps> = ({ profile }) => {
  const user = useAppSelector(selectAuthData);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files[0];
      const data = await Api().user.upload(file);
      dispatch(setAuthData(data));
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(setProfileData(profile));
    return () => {
      dispatch(setProfileData(null));
    };
  }, []);

  const tabs = ["Статьи", "Комментарии", "Черновики", "Донаты", "Подробнее"];

  const [activeTab, setActiveTab] = useState("Статьи");

  return (
    <MainLayout contentFullWidth hideComments>
      <Paper
        className="d-flex justify-center align-center p-20 mb-15"
        elevation={0}
      >
        <Button variant="contained">
          <svg
            viewBox="0 0 16 16"
            id="ui_image"
            width={16}
            height={16}
            style={{ marginRight: 10 }}
          >
            <path d="M5.378 3.806a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zM15.057.028H.957a.945.945 0 00-.945.944v13.096c0 .522.423.944.945.944h14.099a.944.944 0 00.945-.944V.972a.944.944 0 00-.944-.944zM13.64 13.123H5.992l5.284-5.539 2.836 2.77v2.297c0 .26-.211.472-.472.472zm-1.586-7.025a.933.933 0 00-.779-.403.929.929 0 00-.668.272c-.033.033-.06.07-.086.105l-6.807 7.052h-1.34a.472.472 0 01-.473-.472V2.389c0-.26.212-.472.473-.472H13.64c.26 0 .472.211.472.472v5.767l-2.058-2.058z"></path>
          </svg>
          Добавить обложку
        </Button>
      </Paper>
      <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
        <div className="d-flex justify-between">
          <div>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                alt="avatar"
                src={
                  profile.imageUrl
                    ? `/static/${profile.imageUrl}`
                    : profile?.fullName[0]
                }
              />
              <Button
                className={clsx(styles.button, {
                  [styles.hidden]: user?.id !== profile.id,
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
            <Link
              href={`/${user.fullName.toLowerCase().split(" ").join("-")}/${
                user?.id
              }/settings`}
            >
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained"
                disabled={user?.id !== profile.id}
              >
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="outlined" color="primary">
              <MessageIcon className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
        {user?.id === profile.id && (
          <div className="mb-10 mt-10">
            <Link
              href={`/${user.fullName.toLowerCase().split(" ").join("-")}/${
                user?.id
              }/settings`}
            >
              <a className={styles.changeDescButton}>Изменить описание</a>
            </Link>
          </div>
        )}

        <div className="d-flex mb-10 mt-10">
          <Typography
            style={{ fontWeight: "bold", color: "#35AB66" }}
            className="mr-15"
          >
            {user?.commentsCount > 0 ? (
              <span>+{user?.commentsCount * 2 + user?.postsCount * 3}</span>
            ) : (
              "0"
            )}
          </Typography>
          <Typography>2 подписчика</Typography>
        </div>
        <Typography>
          На проекте с {ISOConverter.format(profile.createdAt, true)}
        </Typography>
        <Tabs
          className="mt-20"
          value={tabs.indexOf(activeTab)}
          indicatorColor="primary"
          textColor="primary"
        >
          {tabs.map((tab, _) => {
            if (
              (tab === "Черновики" || tab === "Донаты") &&
              user?.id !== profile.id
            ) {
              return <Tab className={styles.hiddenTab} />;
            }
            return (
              <Tab
                label={tab}
                onClick={() => setActiveTab(tab)}
                className={styles.tab}
              />
            );
          })}
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="mr-20 flex mt-0">
          {activeTab === "Статьи" && (
            <ProfilePosts id={profile.id} imageUrl={profile.imageUrl} />
          )}
          {activeTab === "Комментарии" && (
            <ProfileComments id={profile.id} userId={user?.id} />
          )}
          {activeTab === "Донаты" && <ProfileDrafts id={profile.id} />}
          {activeTab === "Черновики" && <ProfileDonates id={profile.id} />}
          {activeTab === "Подробнее" && <ProfileMore id={profile.id} />}
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
