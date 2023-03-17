import axios from "axios";
import Styles from "@/components/Common/QuestionAnswer/QuestionAnswer.module.css";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";

/* 텍스트 지우는 함수 */
function clearText(target) {
  target.value = "";
}

const QuestionAnswer = () => {
  const submitData = async () => {
    const commentWriteField = document.getElementById("comment");

    await axios
      .post(`http://localhost:3001/questionComment/`, {
        nickname: "",
        content: commentWriteField.value,
      })
      .then((res) => {
        console.log(res);
        clearText(commentWriteField);
        // window.location.reload(); 자동 리로드
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className={Styles.answerWrite}>
      <h2>답변하기</h2>

      <textarea
        id="comment"
        name="comment"
        placeholder="질문에 대한 답변을 하려면 로그인을 해주세요"
      ></textarea>

      <div className={Styles.submitButton}>
        <SubmitButton onClick={submitData} title="등록" writeButton={true} />
      </div>
    </div>
  );
};

export default QuestionAnswer;
