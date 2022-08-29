import { Button, Paper } from "@mui/material";
import Link from "next/link";
import React from "react";

interface ProfileMoreType {
  id: number;
}

const ProfileMore: React.FC<ProfileMoreType> = ({ id }) => {
  return (
    <div>
      <>
        <Paper
          elevation={0}
          className="p-20 d-flex flex-column align-start justify-center mb-20"
          style={{ borderRadius: 10 }}
        >
          <div className="d-flex flex-column">
            <span style={{ fontWeight: 500, fontSize: 16 }}>Подписки</span>
            <span style={{ opacity: 0.7, marginTop: 10, fontSize: 16 }}>
              У вас нет ещё подписчиков
            </span>
          </div>
        </Paper>
        <Paper
          elevation={0}
          className="p-20 d-flex flex-column align-start justify-center"
          style={{ borderRadius: 10 }}
        >
          <div className="d-flex flex-column">
            <span style={{ fontWeight: 500, fontSize: 16 }}>Подписчики</span>
            <span style={{ marginTop: 10 }}>Настроить ленту</span>
          </div>
        </Paper>
      </>
    </div>
  );
};

export default ProfileMore;
