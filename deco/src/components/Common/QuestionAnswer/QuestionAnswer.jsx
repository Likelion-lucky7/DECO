import axios from "axios";
import { useRecoilState } from "recoil";
import styles from "@/components/Common/QuestionAnswer/QuestionAnswer.module.css";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import { commentState } from "@/@store/commentState";
import { useCreateData } from "@/firebase/firestore";
import { useId, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "@/firebase/auth";

/* 텍스트 지우는 함수 */
function clearText(target) {
  target.value = "";
}

const QuestionAnswer = ({ title, ...restProps }) => {
  const { user } = useAuthState();
  const [comment, setComment] = useRecoilState(commentState);
  const { createData } = useCreateData("comments");
  const commentsId = useParams();
  const id = useId();
  const navigate = useNavigate();

  console.log(commentsId);
  // 로그인 되어있지 않으면 로그인 페이지로 이동
  const checkUser = () => {
    if (!user) {
      navigate("/login");
    }
  };

  function onChange(e) {
    setComment(e.target.value);
  }

  const submitData = async (e) => {
    const commentWriteField = comment;

    e.preventDefault();

    // firebase 이용하는 방법
    await createData({
      user: {
        userId: user?.email,
        profile: user?.photoURL,
        nickname: user?.displayName,
      },
      date: new Date().getTime(),
      comment: commentWriteField,
      commentId: commentsId.id,
    });
    // indexData.current += 1;
    await clearText(commentWriteField);

    console.log("comments 콜렉션에 comments 데이터 생성");

    // axios 목업 데이터 이용하는 방법
    /* await axios
      .post(`http://localhost:3001/question/`, {
        user: {
          userId: "임시 아이디",
          nickname: "임시 닉네임", // 나중에 {id}에 맞는 {nickname}을 가져올 수 있게
        },
        comment: commentWriteField.value,
      })
      .then((res) => {
        console.log(res);
        clearText(commentWriteField);
      })
      .then((error) => {
        console.log(error);
      }); */
  };

  return (
    <div className={styles.answerWrite}>
      <h2>{title}</h2>

      <form onSubmit={submitData}>
        <label htmlFor={id} className={styles.hidden}>
          답변 입력란
        </label>
        <textarea
          id={id}
          name="comment"
          placeholder="질문에 대한 답변을 하려면 로그인을 해주세요"
          onChange={onChange}
          onClick={checkUser}
          {...restProps}
        ></textarea>

        <div className={styles.submitButton}>
          <SubmitButton
            type="submit"
            title="등록"
            writeButton={true}
            onClick={checkUser}
          />
        </div>
      </form>
    </div>
  );
};

export default QuestionAnswer;

/* Props -------------------------------------------------------------------- */

QuestionAnswer.defaultProps = {
  title: "답변하기",
};
