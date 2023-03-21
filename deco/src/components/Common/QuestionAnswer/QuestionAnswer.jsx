import axios from "axios";
import { useRecoilState } from "recoil";
import Styles from "@/components/Common/QuestionAnswer/QuestionAnswer.module.css";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import { commentState } from "@/@store/commentState";
import { useCreateData } from "@/firebase/firestore";

/* 텍스트 지우는 함수 */
function clearText(target) {
  target.value = "";
}

const QuestionAnswer = () => {
  const [comment, setComment] = useRecoilState(commentState);
  const { createData } = useCreateData("comments");

  function onChange(e) {
    setComment(e.target.value);
  }

  const submitData = async (e) => {
    const commentWriteField = document.getElementById("comment");

    e.preventDefault();

    await createData(
      await {
        user: {
          userid: "임시 아이디",
          nickname: "임시 닉네임",
        },
        comment: commentWriteField.value,
      },
    );
    clearText(commentWriteField);

    console.log("comments 콜렉션에 comments 데이터 생성");

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
    <div className={Styles.answerWrite}>
      <h2>답변하기</h2>

      <form onSubmit={submitData}>
        <textarea
          id="comment"
          name="comment"
          placeholder="질문에 대한 답변을 하려면 로그인을 해주세요"
          onChange={onChange}
        ></textarea>

        <div className={Styles.submitButton}>
          <SubmitButton type="submit" title="등록" writeButton={true} />
        </div>
      </form>
    </div>
  );
};

export default QuestionAnswer;
