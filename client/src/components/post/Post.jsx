import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import "./post.css";
import {Users} from '../../dummyData.js'

const Post = ({post}) => {
  const[like, setLike]=useState(post.like)
  const[isLike, setIsLike]=useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  const likeHandler =() =>{
    setLike(isLike ? like-1 : like +1)
    setIsLike(!isLike)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter(u=>u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postIconMorvert"/>
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/Like-Button-PNG.png"
              alt=""
              onClick={likeHandler}
            />
            <img 
            className="likeIcon" 
            src="/assets/heart.png" 
            alt="" 
            onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
