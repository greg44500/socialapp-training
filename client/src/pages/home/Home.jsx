import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topBar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightBar/Rigntbar";
import './home.css'
const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
