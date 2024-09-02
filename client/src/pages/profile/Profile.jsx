import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightBar/Rigntbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topBar/Topbar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img 
              className="profileCoverImg" 
              src="assets/post/8.jpg" 
              alt="" 
              />
              <img
                className="profileUserImg"
                src="assets/person/9.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Greg FakeBook</h4>
                <span className="profileInfoDesc">Hello My friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
