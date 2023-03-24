import { forwardRef } from "react";
import { ReactComponent as Upload } from "../../../assets/file_upload.svg";
import styles from "./FileUpload.module.css";

const FileUpload = forwardRef(function FileUpload({ isSignUp, id }, ref) {
  return (
    <div>
      {isSignUp ? (
        <div>
          <label htmlFor={id} className={styles.profile_label_isSignUp}>
            <Upload className={styles.profile_image_isSignUp} /> 파일 업로드
          </label>

          <input
            id={id}
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            name="profile"
            className={styles.profile_form_isSignUp}
            ref={ref}
          />
        </div>
      ) : (
        <div>
          <label htmlFor={id} className={styles.profile_label}>
            <Upload className={styles.profile_image} /> 파일 업로드
          </label>

          <input
            id={id}
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            name="profile"
            className={styles.profile_form}
            ref={ref}
          />
        </div>
      )}
    </div>
  );
});

export default FileUpload;
