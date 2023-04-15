import WriteInput from "@/components/Common/WriteInput/WriteInput";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import TagInput from "@/components/Common/TagInput/TagInput";
import styles from "./CommunityWrite.module.css";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import { useEffect, useId } from "react";
import { useUploadFiles } from "@/firebase/storage";
import { dbService } from "@/firebase/app";
import { titleState } from "@/@store/titleState";
import { contentState } from "@/@store/contentState";
import { useReadData } from "@/firebase/firestore/useReadData";
import { useRecoilValue } from "recoil";
import { fileImageState } from "@/@store/fileImageState";
import { useAuthState } from "@/firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { hashTagListState } from "@/@store/hashTagListState";
import { authUser } from "@/@store/user";

const CommunityWrite = () => {
  const navigate = useNavigate();
  const { user } = useAuthState();
  const userData = useRecoilValue(authUser);
  const inputTitle = useRecoilValue(titleState);
  const inputContent = useRecoilValue(contentState);
  const { readData, data } = useReadData("community");
  const inputFileImage = useRecoilValue(fileImageState);
  const inputHashTagList = useRecoilValue(hashTagListState);

  // 파일 업로드
  const id = useId();
  const { fileInputRef, uploadFiles } = useUploadFiles();

  // doc.id값 추출위해 useEffect 사용
  // useEffect(() => {
  //   if (data) {
  //     console.log(data.id);
  //   }
  // }, [data]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const confirmMessage = confirm("글을 작성하시겠습니까?");

    if (confirmMessage) {
      try {
        // 파일 업로드 요청
        if (fileInputRef.current.files.length > 0) {
          await uploadFiles();
        }
        // firestore 문서 추가
        const docRef = await addDoc(collection(dbService, "community"), {
          title: inputTitle,
          content: inputContent,
          hashTag: inputHashTagList,
          image: inputFileImage,
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

        // 문서 추가 후 추가된 문서 ID 값으로 문서 읽기 요청
        await readData(docRef.id);
        navigate("/community");
        location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <WriteInput isWrite={true} />
        <TagInput isWrite={true} />
        <div className={styles.rowButton}>
          <FileUpload isSignUp={false} id={id} ref={fileInputRef} />
          <SubmitButton onClick={onSubmit} writeButton={true} title="등록" />
        </div>
      </div>
    </div>
  );
};

export default CommunityWrite;
