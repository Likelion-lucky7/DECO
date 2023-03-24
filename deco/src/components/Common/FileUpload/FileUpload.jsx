import { ReactComponent as Upload } from "../../../assets/file_upload.svg";
import styles from "./FileUpload.module.css";
import { useState, useRef, useEffect } from "react";

const FileUpload = ({ isSignUp }) => {
  const [imgFile, setImgFile] = useState([]);
  const imgRef = useRef([null, null]);
  const [isVisible, setIsVisible] = useState([true, false]);

  // 이미지 업로드 input의 onChange
  const saveImgFile = (index) => {
    const file = imgRef.current[index].files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setImgFile([...imgFile, previewImgUrl]);
      }
    };
  };

  useEffect(() => {
    if (imgFile[0]) {
      setIsVisible([true, true]);
    }
  }, [imgFile]);

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
        <div className={styles.box}>
          {isVisible.map((item, index) => {
            {
              index;
            }
            return item ? (
              <div key={index}>
                <label htmlFor="file" className={styles.profile_label}>
                  <span className={styles.profile_image}>
                    {!imgFile[index] && `파일 업로드`}
                    {imgFile[index] && (
                      <img
                        src={
                          imgFile[index]
                            ? imgFile[index]
                            : `/images/icon/user.png`
                        }
                        alt="프로필 이미지"
                      />
                    )}
                  </span>
                </label>
                <input
                  ref={(el) => {
                    imgRef.current[index] = el;
                  }}
                  id="file"
                  type="file"
                  accept="image/jpg, image/png, image/jpeg"
                  name="profile"
                  className={styles.profile_form}
                  onChange={() => saveImgFile(index)}
                />
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
