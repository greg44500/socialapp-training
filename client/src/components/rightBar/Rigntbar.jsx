import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.jpg" alt="" />
          <span className="birthdayText">
            <b>Pola foster</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/add.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User informations</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoValue">France</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship : </span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/4.jpg"
              alt=""
            />
            <span className="rightbarFollowingUsername">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/5.jpg"
              alt=""
            />
            <span className="rightbarFollowingUsername">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/6.jpg"
              alt=""
            />
            <span className="rightbarFollowingUsername">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/7.jpg"
              alt=""
            />
            <span className="rightbarFollowingUsername">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/8.jpg"
              alt=""
            />
            <span className="rightbarFollowingUsername">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/9.jpg"
              alt=""
            />
            <span className="rightbarFollowingUsername">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
