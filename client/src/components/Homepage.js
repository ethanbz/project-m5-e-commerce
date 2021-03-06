import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { currentUser } from "./Login";

const Homepage = () => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("idle");
  }, []);

  console.log(currentUser);

  return status === "idle" ? (
    <>
      <div>Website name</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
    </>
  ) : (
    <CircularProgress />
  );
};

export default Homepage;
