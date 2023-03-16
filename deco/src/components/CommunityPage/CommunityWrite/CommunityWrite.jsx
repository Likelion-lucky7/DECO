import WriteInput from "@/components/Common/WriteInput/WriteInput";
import FileUpload from "@/components/Common/FileUpload/FileUpload";
import TagInput from "@/components/Common/TagInput/TagInput";
import styles from "./CommunityWrite.module.css";

const CommunityWrite = () => {
  return (
    <div className={styles.container}>
      <div>
        <WriteInput isQuestion={false} />
        <TagInput isQuestion={false} />
        <FileUpload isSignUp={false} />
      </div>
    </div>
  );
};

export default CommunityWrite;
