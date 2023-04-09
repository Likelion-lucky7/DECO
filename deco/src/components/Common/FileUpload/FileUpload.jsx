import { forwardRef } from "react";
import { ReactComponent as Upload } from "../../../assets/file_upload.svg";
import styles from "./FileUpload.module.css";
import { useRecoilState } from "recoil";
import { fileImageState } from "@/@store/fileImageState";

const FileUpload = forwardRef(function FileUpload(
  { isSignUp, id, ...restProps },
  ref,
) {
  const [imgFile, setImgFile] = useRecoilState(fileImageState);

  const onImageChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setImgFile(result);
    };
    reader.readAsDataURL(theFile);
  };

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
            {...restProps}
          />
        </div>
      ) : (
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <label htmlFor={id} className={styles.profile_label}>
              <span className={styles.profile_image}>파일업로드</span>
              {imgFile && <img src={imgFile} alt="" />}
            </label>
            <input
              id={id}
              type="file"
              accept="image/jpg, image/png, image/jpeg"
              name="profile"
              className={styles.profile_form}
              ref={ref}
              onChange={onImageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default FileUpload;
