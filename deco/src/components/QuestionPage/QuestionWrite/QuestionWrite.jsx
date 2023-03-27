import WriteInput from "@/components/Common/WriteInput/WriteInput";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import TagInput from "@/components/Common/TagInput/TagInput";
import styles from "./QuestionWrite.module.css";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import { titleGetState, titleState } from "@/@store/titleState";
import { collection, addDoc } from "firebase/firestore";
import { dbService } from "@/firebase/app";
import { contentState } from "@/@store/contentState";
import { hashTagListState } from "@/@store/hashTagListState";
import { useEffect, useId } from "react";
import { useUploadFiles } from "@/firebase/storage";
import { fileImageState } from "@/@store/fileImageState";
import { selectState } from "@/@store/selectState";
import { useNavigate } from "react-router-dom";
import { useReadData } from "@/firebase/firestore/useReadData";
import { useAuthState } from "@/firebase/auth";
import { authUser } from "@/@store/user";

const QuestionWrite = () => {
  const { user } = useAuthState();
  const { readData, data } = useReadData("question");
  const inputTitle = useRecoilValue(titleState);
  const inputContent = useRecoilValue(contentState);
  const inputHashTagList = useRecoilValue(hashTagListState);
  const inputFileImage = useRecoilValue(fileImageState);
  const [selected, setSelected] = useRecoilState(selectState);
  const resetTitle = useResetRecoilState(titleState);
  const navigate = useNavigate();
  const getTitle = useRecoilValue(titleGetState);
  let userData = useRecoilValue(authUser);

  //파일 업로드
  const id = useId();
  const { fileInputRef, uploadFiles } = useUploadFiles();

  useEffect(() => {
    if (data) {
      console.log("result입니다. ", data.id);
      console.log(`/question/${data.id}로 이동합니다.`);
      // navigate(`/question/`);
    }
  }, [data, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    let confirmMessage = confirm("글을 작성하시겠습니까?");

    if (confirmMessage) {
      try {
        // 1. 파일 업로드 요청 (업로드 할 파일 개수가 1개 이상인 경우만)
        if (fileInputRef.current.files.length > 0) {
          await uploadFiles();
        }

        // 2. 도큐멘트 추가 요청
        const docRef = await addDoc(collection(dbService, "question"), {
          category: selected,
          title: inputTitle,
          content: inputContent,
          hashTag: inputHashTagList,
          image: inputFileImage,
          // id: "",
          createdAt: Date.now(),
          hits: 0,
          like: 0,
          user: {
            email: user.email,
            nickname: user.displayName,
            profile: user.photoURL,
            userId: userData,
          },
        });

        // 3. 도큐멘트 추가 이후, 추가된 도큐멘트 ID 값으로 도큐멘트 읽기 요청
        await readData(docRef.id);

        navigate(`/question/`);
        window.location.reload();
      } catch (e) {
        console.error("error");
      }
    }
  };

  // select box
  const selectList = [
    { value: "토픽 선택", name: "토픽 선택" },
    { value: "기술", name: "기술" },
    { value: "커리어", name: "커리어" },
  ];

  const handleSelect = (e) => {
    setSelected(e.target.value);
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
        <select
          className={styles.select}
          onChange={handleSelect}
          value={selected}
        >
          {selectList.map((item) => {
            return (
              <option
                value={item.value}
                key={item.value}
                defaultValue="토픽 선택"
              >
                {item.name}
              </option>
            );
          })}
        </select>

        <WriteInput isQuestion={true} />
        <TagInput isQuestion={true} />
        <div className={styles.rowButton}>
          <FileUpload isSignUp={false} id={id} ref={fileInputRef} />
          <SubmitButton onClick={onSubmit} title="등록" writeButton={true} />
        </div>
      </div>
    </div>
  );
};

export default QuestionWrite;
