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
  let { user, comment, image } = item;

  const [commentField, setCommentField] = useRecoilState(commentUpdateState);

  const [updateMode, setUpdateMode] = useState(false);
  const [updateComment, setUpdateComment] = useState("");

  const { deleteData } = useDeleteData("comments");
  const { updateData } = useUpdateData("comments");

  let path = "75rPtTlDHIoS9qzVzPi5";
  // path를 안 받아오고 해결 하는 법이 있을까

  const onClickDotButton = async (e) => {
    e.preventDefault();

    if (e.target.name == "updateButton") {
      setUpdateMode((updateMode) => !updateMode);
    }

    if (e.target.name == "deleteButton") {
      await deleteData(path);
    }
  };

  const onChangeComment = (e) => {
    setCommentField(e.target.value); // 리코일
    setUpdateComment(e.target.value); // 댓글 입력값 업데이트
  };

  const onClickUpdateButton = async (e) => {
    e.preventDefault();

    setUpdateMode((updateMode) => !updateMode);

    await updateData(
      {
        comment: updateComment,
      },
      path,
    );
  };

  const onClickCancelButton = () => {
    setUpdateMode((updateMode) => !updateMode);
  };

  return (
    <div>
      {updateMode ? (
        <div className={styles.editorBox}>
          <form onSubmit={onClickUpdateButton}>
            <img
              src={emptyPicture}
              className={styles.profileImege}
              alt="exampleImage1"
            />

            <span className={styles.nickName}>{user.nickname}</span>

            <div className={styles.submitButton}>
              <SubmitButton type="submit" title="수정" writeButton={true} />
              <SubmitButton
                type="button"
                title="취소"
                writeButton={true}
                onClick={onClickCancelButton}
              />
            </div>

            <textarea
              className={styles.updateAnswer}
              type="text"
              name="updateComment"
              placeholder="수정할 내용을 입력해주세요."
              defaultValue={comment}
              onChange={onChangeComment}
            ></textarea>
          </form>
        </div>
      ) : (
        <div className={styles.editorBox}>
          <form>
            <img
              src={emptyPicture}
              className={styles.profileImege}
              alt="exampleImage1"
            />

            <span className={styles.nickName}>{user.nickname}</span>

            <p className={styles.answer} type="text" name="comment">
              {comment}
            </p>

            <DotButton onClick={onClickDotButton} />
          </form>
        </div>
      )}
    </div>
  );
};

export default AnswerEditor;
