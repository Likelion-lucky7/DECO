import AnswerEditor from "@/components/Common/AnswerEditor/AnswerEditor";
import QuestionAnswer from "@/components/Common/QuestionAnswer/QuestionAnswer";
import React, { useEffect, useState } from "react";
import styles from "@/components/Common/Comment/Comment.module.css";
import { db } from "@/firebase/firestore";
import { collection, onSnapshot, query } from "firebase/firestore";

const Comment = ({ id }) => {
  let [props, setProps] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const q = await query(collection(db, "comments"));

      onSnapshot(q, (querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log(data);
        setProps(data);
      });
    };

    getData();
  }, []);

  return (
    <>
      <QuestionAnswer />
      <h2 className={styles.title}>답변</h2>

      {props.map((item) => {
        return <AnswerEditor key={item.id} item={item} />;
      })}
    </>
  );
};

export default Comment;
