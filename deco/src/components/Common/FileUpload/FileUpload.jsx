import { ReactComponent as Upload } from "../../../assets/file_upload.svg";
import styles from "./FileUpload.module.css";

const FileUpload = ({ isSignUp }) => {
  return (
    <div>
      {isSignUp ? (
        <div>
          <label htmlFor="file" className={styles.profile_label_isSignUp}>
            <Upload className={styles.profile_image_isSignUp} /> 파일 업로드
          </label>

          <input
            id="file"
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            name="profile"
            className={styles.profile_form_isSignUp}
          />
        </div>
      ) : (
        <div>
          <label htmlFor="file" className={styles.profile_label}>
            <Upload className={styles.profile_image} /> 파일 업로드
          </label>

          <input
            id="file"
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            name="profile"
            className={styles.profile_form}
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
