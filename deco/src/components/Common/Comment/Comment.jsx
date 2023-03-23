import AnswerEditor from "@/components/Common/AnswerEditor/AnswerEditor";
import QuestionAnswer from "@/components/Common/QuestionAnswer/QuestionAnswer";
import React, { useEffect, useState } from "react";
import styles from "@/components/Common/Comment/Comment.module.css";
import { db } from "@/firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Comment = ({ id }) => {
  const [data, setData] = useState([]);
  const questionId = useParams();
  const getData = async () => {
    const querySnapShot = await getDocs(collection(db, "comments"));

    const newData = querySnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setData(newData);
  };
  useEffect(() => {
    getData();
  }, []);

  const newArr = data.sort((a, b) => b.date - a.date).map((item) => item.date);

  return (
    <>
      <QuestionAnswer />
      <h2 className={styles.title}>답변</h2>
      {newArr.map((i) => {
        const item = data.find(
          (item) => +questionId.id === item.commentId && item.date === i,
        );
        return item ? (
          <AnswerEditor key={item.id} item={item} sort={newArr} />
        ) : undefined;
      })}
    </>
  );
};

export default Comment;
