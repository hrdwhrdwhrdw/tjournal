import React from "react";
import { CircularProgress } from '@mui/material';

const Preloader = () => {
  return (
    <div className="d-flex align-center justify-center">
      <CircularProgress style={{ color: "#fcae41" }} />
    </div>
  );
};

export default Preloader;
