import { useRef, useState } from "react";
import threeDot from "@/assets/dots_three_icon.png";
import styles from "@/components/Common/DotButton/DotButton.module.css";

const DotButton = ({ ...restProps }) => {
  const [displayState, setDisplayState] = useState(false);

  // 토글 형식
  const onClickDot = () => {
    setDisplayState((displayState) => !displayState);
  };

  return (
    <>
      <img
        src={threeDot}
        type="button"
        className={styles.dotThree}
        onClick={onClickDot}
        /* 그냥 onClick만 쓰면 eslint에서 오류라고 해서 aria-hidden까지 써야 오류 안 나타남  */
        aria-hidden="true"
        alt="점 세개 선택버튼"
      />
      <div
        className={
          displayState ? styles.buttonWrapperDisplay : styles.buttonWrapper
        }
      >
        <button name="updateButton" type="submit" {...restProps}>
          수정하기
        </button>
        <button name="deleteButton" type="submit" {...restProps}>
          삭제하기
        </button>
      </div>
    </>
  );
};

export default DotButton;
