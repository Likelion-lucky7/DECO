import WriteInput from "@/components/Common/WriteInput/WriteInput";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import TagInput from "@/components/Common/TagInput/TagInput";
import styles from "./CommunityWrite.module.css";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";

const CommunityWrite = () => {
  return (
    <div className={styles.container}>
      <div>
        <WriteInput isQuestion={false} />
        <TagInput isQuestion={false} />
        <div className={styles.rowButton}>
          <FileUpload isSignUp={false} />
          <SubmitButton writeButton={true} title="등록" />
        </div>
      </div>
    </div>
  );
};

export default CommunityWrite;
