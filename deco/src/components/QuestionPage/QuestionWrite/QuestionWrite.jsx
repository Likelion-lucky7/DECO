import WriteInput from "@/components/Common/WriteInput/WriteInput";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import TagInput from "@/components/Common/TagInput/TagInput";
import styles from "./QuestionWrite.module.css";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import { useRecoilValue } from "recoil";
import { titleState } from "@/@store/titleState";
import { collection, addDoc } from "firebase/firestore";
import { dbService } from "@/firebase/app";
import { contentState } from "@/@store/contentState";
import { hashTagListState } from "@/@store/hashTagListState";
import { useId } from "react";
import { useUploadFiles } from "@/firebase/storage";
import { fileImageState } from "@/@store/fileImageState";

const QuestionWrite = () => {
  const inputTitle = useRecoilValue(titleState);
  const inputContent = useRecoilValue(contentState);
  const inputHashTagList = useRecoilValue(hashTagListState);
  const inputFileImage = useRecoilValue(fileImageState);

  //파일 업로드
  const id = useId();
  const { fileInputRef, uploadFiles } = useUploadFiles();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("해시태그", inputHashTagList);
    console.log("1" + inputContent);

    uploadFiles();
    console.log("파일 업로드 요청");

    try {
      const docRef = await addDoc(collection(dbService, "question"), {
        title: inputTitle,
        content: inputContent,
        hashtag: inputHashTagList,
        file: inputFileImage,
      });
      console.log("성공?", docRef.id);
    } catch (e) {
      console.error("error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.infoBox}>
          💡 제목은 궁금한 것을 구체적으로 담아 질문 형태로 작성하세요. <br />
          <br /> 👍🏻 좋은 제목 예시: 부트캠프 수료하신 분들은 어떤 경로로
          취업하시나요? <br />
          <br />
          👎🏻 나쁜 제목 예시: 현재 개발 공부중인데 어떻게 취업하는게 좋은가요?
        </p>
        <p className={styles.infoBox}>
          💡 내용에 구체적인 문제 상황이 포함될 수록 좋아요. <br />
          <br /> 👍🏻 현재 상황에 대한 정보를 자세하게 적어주시면 더 좋은 답변을
          받을 수 있어요.{" "}
        </p>
        <p className={styles.infoBox}>
          💡 태그를 최소 1개 이상 입력해서 많은 사람들이 쉽게 볼 수 있도록
          하세요. <br />
          <br /> 👍🏻 다른 사람들이 질문의 내용을 빨리 파악하는데 도움을 줍니다.{" "}
        </p>
      </div>

      <div>
        <select name="" id="" className={styles.select}>
          <option value="" defaultValue="토픽 선택">
            토픽 선택
          </option>
          <option value="skill">기술</option>
          <option value="career">커리어</option>
        </select>

        <WriteInput isQuestion={true} />
        <TagInput isQuestion={true} />
        <form className={styles.rowButton}>
          <FileUpload isSignUp={false} id={id} ref={fileInputRef} />
          <SubmitButton onClick={onSubmit} title="등록" writeButton={true} />
        </form>
      </div>
    </div>
  );
};

export default QuestionWrite;
