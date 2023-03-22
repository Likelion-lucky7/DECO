import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import Like from "@/assets/heartActivate.svg";
import Comment from "@/components/Common/Comment/Comment";
import { ReactComponent as Profile } from "@/assets/profile.svg";
import { dbService } from "@/firebase/app";
import {collection, onSnapshot } from "firebase/firestore";

const {
  container,
  topic,
  profileImege,
  nickName,
  likeIcon,
  tagBox,
  textTitle,
  uploadImage,
  mainText,
} = styles;

const DetailPage = () => {
  let id = useParams();
  let [data, setData] = useState([]);

  useEffect(() => {
    onSnapshot(collection(dbService, "nweets"), (snapshot) => {
      const nweetsArr = snapshot.docs.map((item)=> item.data())
        const filteredData = nweetsArr.filter(item=>{ return item.id == id.id})
        setData(filteredData[0])
      })
    }, []);
    
  let { title, content, image, user, category, hashTag, like, hits } = data;

  return (
    <div className={container}>
      <div>
        <span className={topic}>{category}</span>
        <h2 className={textTitle}>{title}</h2>
        {user?.profile === "" ? (
          <Profile className={profileImege} />
        ) : (
          <img
            src={user?.profile}
            className={profileImege}
            alt="exampleImage1"
          />
        )}
        <span className={nickName}>{user?.nickname}</span>
        <p className={mainText}>{content}</p>
        {image ? <img src={image} className={uploadImage} alt="" /> : null}
        <div className={tagBox}>
          {hashTag?.length > 1 ?hashTag?.map((item, index) => {
            return <span key={index}>#{item}</span>;
          }):null}
        </div>
      </div>
      <button className={likeIcon}>
        <img src={Like} alt="하트" />
        <span>좋아요</span>
      </button>
      <Comment id={id.id} />
    </div>
  );
};

export default DetailPage;
