import AnswerEditor from "@/components/Common/AnswerEditor/AnswerEditor";
import QuestionAnswer from "@/components/Common/QuestionAnswer/QuestionAnswer";
import React, { useEffect, useState } from "react";
import styles from "@/components/Common/Comment/Comment.module.css";
import { db } from "@/firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Comment = ({ id }) => {
  let [props, setProps] = useState([]);
  const questionId = useParams();
  const getData = async () => {
    const querySnapShot = await getDocs(collection(db, "comments"));

    const newData = querySnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      // const filteredData
    }));
    setProps(newData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <QuestionAnswer />
      <h2 className={styles.title}>답변</h2>
      {props.map((item) => {
        return +questionId.id === item.commentId ? (
          <AnswerEditor key={item.id} item={item} />
        ) : undefined;
      })}
      {/* {props.map((item) => {
        console.log(item);
        return <AnswerEditor key={item.id} item={item} />;
      })} */}
    </>
  );
};

export default Comment;
