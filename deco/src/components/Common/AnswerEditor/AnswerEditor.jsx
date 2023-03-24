import { useState } from "react";
import styles from "@/components/Common/AnswerEditor/AnswerEditor.module.css";
import emptyPicture from "@/assets/empty_Picture.png";
import DotButton from "@/components/Common/DotButton/DotButton";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import { useDeleteData, useUpdateData } from "@/firebase/firestore";
import { commentUpdateState } from "@/@store/commentUpdateState";
import { useRecoilState } from "recoil";
import { async } from "@firebase/util";

const AnswerEditor = ({ item }) => {
  const { user, comment, id } = item;

  const [commentField, setCommentField] = useRecoilState(commentUpdateState);

  const [updateMode, setUpdateMode] = useState(false);

  const { deleteData } = useDeleteData("comments");
  const { updateData } = useUpdateData("comments");

  const onClickDotButton = async (e) => {
    e.preventDefault();

    if (e.target.name == "updateButton") {
      setUpdateMode((updateMode) => !updateMode);
    }

    if (e.target.name == "deleteButton") {
      await deleteData(id);
    }
  };

  const onChangeComment = (e) => {
    setCommentField(e.target.value); // 리코일
  };

  const onClickUpdateButton = async (e) => {
    e.preventDefault();

    setUpdateMode((updateMode) => !updateMode);

    await updateData(
      {
        comment: commentField,
      },
      id,
    );
  };

  const onClickCancelButton = () => {
    setUpdateMode((updateMode) => !updateMode);
  };

  return (
    <div>
      <div className={styles.editorBox}>
        <img
          src={emptyPicture}
          className={styles.profileImege}
          alt="exampleImage1"
        />
        <span className={styles.nickName}>{user.nickname}</span>
        <p className={styles.answer} type="text" value={"./"}>
          {comment}
        </p>
        <DotButton />
      </div>
    </div>
  );
};

export default AnswerEditor;
