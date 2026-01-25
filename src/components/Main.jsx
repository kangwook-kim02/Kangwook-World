import "./Main.css";
import Home from "./world/Home";
import Profile from "./world/Profile";
import Project from "./world/Project";
import { useState } from "react";

const Main = () => {
  // pageState
  // 0: Home, 1: Profile, 2: Project
  const [pageState, setPageState] = useState(0);

  const onClickButton = (e) => {
    setPageState(Number(e.target.value));
  };

  if (pageState === 0) {
    return <Home onClickButton={onClickButton} pageState={pageState} />;
  } else if (pageState === 1) {
    return <Profile onClickButton={onClickButton} pageState={pageState} />;
  } else if (pageState === 2) {
    return <Project onClickButton={onClickButton} pageState={pageState} />;
  }
};

export default Main;
