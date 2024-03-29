import { useState } from "react";
import styles from "@/components/Common/AnswerEditor/AnswerEditor.module.css";
import DotButton from "@/components/Common/DotButton/DotButton";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import { useDeleteData, useUpdateData } from "@/firebase/firestore";
import { commentUpdateState } from "@/@store/commentUpdateState";
import { useRecoilState } from "recoil";
import { ReactComponent as Profile } from "@/assets/profile.svg";
import { useAuthState } from "@/firebase/auth";

const AnswerEditor = ({ item }) => {
  const { user: authUsers } = useAuthState();

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
      {updateMode ? (
        <div className={styles.editorBox}>
          <form onSubmit={onClickUpdateButton}>
            <img
              src={user.profile}
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
              name="commentField"
              placeholder="수정할 내용을 입력해주세요."
              defaultValue={comment}
              onChange={onChangeComment}
            ></textarea>
          </form>
        </div>
      ) : (
        <div className={styles.editorBox}>
          <form>
            {!user.profile ? (
              <Profile className={styles.profileImege} />
            ) : (
              <img
                src={user.profile}
                className={styles.profileImege}
                alt="exampleImage1"
              />
            )}
            <span className={styles.nickName}>{user?.nickname}</span>
            <p className={styles.answer} type="text" name="comment">
              {comment}
            </p>
            {user.userId == authUsers?.email && updateMode === false ? (
              <DotButton onClick={onClickDotButton} />
            ) : null}
          </form>
        </div>
      )}
    </div>
  );
};

export default AnswerEditor;
