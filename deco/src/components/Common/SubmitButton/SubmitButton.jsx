import { useId } from "react";
import styles from "./SubmitButton.module.css";
import { useRecoilValue } from "recoil";
import { titleState } from "@/@store/titleState";
import { collection, addDoc } from "firebase/firestore";
import { dbService } from "@/firebase/app";
import { contentState } from "@/@store/contentState";
import { hashTagState } from "../../../@store/hashTagState";

const SubmitButton = ({ writeButton, title, ...restProps }) => {
  const id = useId();
  const inputTitle = useRecoilValue(titleState);
  const inputContent = useRecoilValue(contentState);
  const inputHashTag = useRecoilValue(hashTagState);

  const submitTitle = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "question"), {
        title: inputTitle,
        content: inputContent,
        hashtag: inputHashTag,
      });
      console.log("성공?", docRef.id);
    } catch (e) {
      console.error("error");
    }
  };
  // const submitTitle = async (e) => {
  //   e.preventDefault();

  //   await createData(
  //     await {
  //       title: inputTitle,
  //     },
  //   );

  //   console.log("성공?!");
  //   /*
  //   try {
  //     await axios
  //       .post(`http://localhost:3001/question/`, {
  //         title: inputTitle,
  //       })
  //       .then(console.log("get data"));
  //   } catch (error) {
  //     console.log(error);
  //   }*/
  // };

  return (
    <>
      {writeButton ? (
        <div className={styles.container_writeButton}>
          <button
            onClick={submitTitle}
            id={id}
            className={styles.button_writeButton}
            {...restProps}
          >
            {title}
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <button
            onClick={submitTitle}
            id={id}
            className={styles.button}
            {...restProps}
          >
            {title}
          </button>
        </div>
      )}
    </>
  );
};

export default SubmitButton;
