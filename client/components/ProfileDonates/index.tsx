import { Button, Paper } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./ProfileDonates.module.scss";

interface ProfileDonatesType {
  id: number;
}

const ProfileDonates: React.FC<ProfileDonatesType> = ({ id }) => {
  return (
    <div>
      <>
        <Paper
          elevation={0}
          className="p-30 d-flex flex-column align-center justify-center"
        >
          <div
            className={
              "d-flex justify-between align-center w100p pb-20 pos-r " +
              styles.balance
            }
          >
            <div className="d-flex flex-column">
              <span style={{ fontSize: 14, fontWeight: 500 }}>
                Текущий баланс
              </span>
              <span style={{ fontSize: 32, fontWeight: 500 }}>0 ₽</span>
            </div>
            <div className="d-flex flex-column align-end">
              <Button
                style={{
                  height: 32,
                  backgroundColor: "#4683d9",
                  color: "#fff",
                  borderRadius: 5,
                }}
                variant="contained"
                color="primary"
                disabled
              >
                Вывести деньги
              </Button>
              <Link href="">
                <a
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#595959",
                    borderBottom: "1px solid #cdcdcd",
                    marginTop: 15,
                  }}
                >
                  Условия вывода
                </a>
              </Link>
              <span></span>
            </div>
          </div>
          <div className="d-flex flex-column justify-center align-center pt-20">
            <span style={{ fontSize: 48 }}>💸</span>
            <span style={{ fontWeight: 500, fontSize: 14 }}>
              Донатов пока нет
            </span>
            <span
              style={{
                fontSize: 14,
                marginTop: 20,
                width: 300,
                textAlign: "center",
              }}
            >
              Вам ещё не присылали донаты, попробуйте{" "}
              <Link href="">
                <a style={{ color: "#3766A9" }}>написать </a>
              </Link>
              что-нибудь интересное.
            </span>
          </div>
        </Paper>
      </>
    </div>
  );
};

export default ProfileDonates;
