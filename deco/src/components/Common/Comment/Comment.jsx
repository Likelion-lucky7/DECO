import AnswerEditor from "@/components/Common/AnswerEditor/AnswerEditor";
import QuestionAnswer from "@/components/Common/QuestionAnswer/QuestionAnswer";
import React, { useEffect, useState } from "react";
import styles from "@/components/Common/Comment/Comment.module.css";
import { db } from "@/firebase/firestore";
import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Comment = ({ id }) => {
  let [timeData, setTimeData] = useState([]);
  const questionId = useParams();

  useEffect(() => {
    const getData = async () => {
      const q = await query(collection(db, "comments"));

      onSnapshot(q, (querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTimeData(data);
      });
    };

    getData();
  }, []);

  const newArr = timeData
    .filter((item) => questionId.id === item.commentId)
    .sort((a, b) => b.date - a.date)
    .map((item) => item.date);

  return (
    <>
      <QuestionAnswer />
      <h2 className={styles.title}>답변</h2>
      {newArr.map((i) => {
        const item = timeData.find(
          (item) => questionId.id === item.commentId && item.date === i,
        );
        return item ? (
          <AnswerEditor key={item.id} item={item} sort={newArr} />
        ) : undefined;
      })}
    </>
  );
};

export default Comment;
