import emptyPicture from "@/assets/empty_Picture.png";
import styles from "@/components/Common/AnswerEditor/AnswerEditor.module.css";
import DotButton from "../DotButton/dotButton";

const AnswerEditor = ({ item }) => {
  let { nickname, comment, image } = item;

  return (
    <div>
      <div className={styles.editorBox}>
        <img
          src={emptyPicture}
          className={styles.profileImege}
          alt="exampleImage1"
        />

        <span className={styles.nickName}>{nickname}</span>

        <p className={styles.answer} type="text" value={"./"}>
          {comment}
        </p>

        <DotButton />
      </div>
    </div>
  );
};

export default AnswerEditor;
