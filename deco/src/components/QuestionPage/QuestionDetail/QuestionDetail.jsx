import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import Like from "@/assets/likeActivate.svg";
import Comment from "@/components/Common/Comment/Comment";
import { ReactComponent as Profile } from "@/assets/profile.svg";
import axios from "axios";

const {
  container,
  topic,
  profileImege,
  nickName,
  like,
  tagBox,
  textTitle,
  uploadImage,
  mainText,
} = styles;

const DetailPage = () => {
  let id = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:3001/questions/${id.id}`,
      );
      let data = await response.data;
      setData(data);
    } catch (error) {
      navigate("/*");
      console.log("404 Error");
    }
  };
  let [data, setData] = useState([]);

  let { description, title, uploadImage:fileImag, user, topic: category, tag } = data;

  return (
    <div className={container}>
      <span className={topic}>{category}</span>
      <h2 className={textTitle}>{title}</h2>
      {user?.image === "" ? (
        <Profile className={profileImege} />
      ) : (
        <img src={user?.image} className={profileImege} alt="exampleImage1" />
      )}
      <span className={nickName}>{user?.nickname}</span>
      <p className={mainText}>{description}</p>
      {fileImag?.map((item, index) => {
        return (
          <img
            key={index}
            className={uploadImage}
            src={item}
            alt="exampleImage2"
          />
        );
      })}

      <div className={tagBox}>
        {tag?.map((item, index) => {
          return <span key={index}>#{item}</span>;
        })}
      </div>
      <button className={like}>
        <img src={Like} alt="하트" />
      </button>
      <Comment />
    </div>
  );
};

export default DetailPage;
