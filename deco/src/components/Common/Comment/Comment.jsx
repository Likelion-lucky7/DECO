import AnswerEditor from "@/components/Common/AnswerEditor/AnswerEditor";
import QuestionAnswer from "@/components/Common/QuestionAnswer/QuestionAnswer";
import React, { useEffect, useState } from "react";
import styles from "@/components/Common/Comment/Comment.module.css";
import axios from "axios";

const Comment = ({ id }) => {
  let [props, setProps] = useState([]);
  const getData = async () => {
    let response = await axios.get(`http://localhost:3001/question/${id}`);
    let data = await response.data;

    setProps(data);
  };

  let commentData = props?.comment;

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <QuestionAnswer />
      <h2 className={styles.title}>답변</h2>
      {commentData?.map((item) => {
        return <AnswerEditor key={item.id} item={item} />;
      })}
    </>
  );
};

export default Comment;
