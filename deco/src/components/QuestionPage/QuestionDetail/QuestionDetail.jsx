import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import Like from "@/assets/heartActivate.svg";
import Comment from "@/components/Common/Comment/Comment";
import { ReactComponent as Profile } from "@/assets/profile.svg";
import { dbService } from "@/firebase/app";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import styles2 from "@/components/Common/WriteInput/WriteInput.module.css";
import { useRecoilValue } from "recoil";
import { getQuestion } from "@/@store/getQuestionData";
import DotButton from "@/components/Common/DotButton/DotButton";
import SubmitButton from "./../../Common/SubmitButton/SubmitButton";

const {
  container,
  topic,
  profileImege,
  nickName,
  likeIcon,
  tagBox,
  textTitle,
  uploadImage,
  mainText,
  dotButton,
  writeForm,
  buttonBox,
} = styles;

const DetailPage = () => {
  let id = useParams();
  let navigate = useNavigate()
  let [editMode, setEditMode] = useState(false);
  let updateTitle = useRef("");
  let updateContent = useRef("");

  let questionData = useRecoilValue(getQuestion);
  let data = questionData.filter((item) => item.id === id.id)[0];

  let { title, content, image, user, category, hashTag, like, hits } = data;

  // 게시글 수정
  const onUpdate = async (e) => {
    e.preventDefault();
    // 임의의 데이터 path를 지정 추후 로그인 인증후 변경 필요
    let testPath = "DNEzD3roLzTP3f4JkeJC";
    const ok = window.confirm("수정하시겠습니까");
    if (ok) {
      await updateDoc(doc(dbService, "question", testPath), {
        title: updateTitle.current.value,
        content: updateContent.current.value,
      });
      setEditMode(!editMode);
      location.reload();
    } else {
      console.log("취소");
    }
  };

//게시글 삭제
const onDelete = async (e) => {
  let ok = window.confirm("삭제하시나요?");
  // 임의의 데이터 path를 지정
  let testPath = "BtgwnuosLKk2xB971fey"
  try {
    if (ok) {
      await deleteDoc(doc(dbService, "question", testPath));
      navigate("/question")
      location.reload()
    } else {
      console.log("삭제x");
    }
    
  } catch (error) {
    console.log(error)
  }
};

  const onClickDotButton = (e) => {
    e.preventDefault();

    if (e.target.name == "updateButton") {
      console.log("수정버튼");
      setEditMode(true);
    }

    if (e.target.name == "deleteButton") {
      onDelete()
    }
  };

  return (
    <div className={container}>
      {editMode ? (
        <div>
          <form onSubmit={onUpdate} className={writeForm}>
            <input
              id={id}
              type="text"
              name="title"
              placeholder="제목을 입력해주세요."
              className={styles2.title}
              ref={updateTitle}
              required
            />
            <span className={styles2.totalNumber}>0 / 100</span>

            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              placeholder="궁금한 내용을 적어주세요.&#10;질문하는 내용이 구체적일수록 더 정확한 답변을 받을 수 있어요."
              className={styles2.content}
              ref={updateContent}
              required
            ></textarea>
            <ul className={buttonBox}>
              <li>
                <SubmitButton type="submit" title="수정" writeButton={true} />
              </li>
              <li>
                <SubmitButton
                  onClick={() => {
                    setEditMode(false);
                  }}
                  title="취소"
                  writeButton={true}
                />
              </li>
            </ul>
          </form>
        </div>
      ) : (
        <div>
          <span className={topic}>{category}</span>
          <h2 className={textTitle}>{title}</h2>
          {user?.profile === "" ? (
            <Profile className={profileImege} />
          ) : (
            <img
              src={user?.profile}
              className={profileImege}
              alt="exampleImage1"
            />
          )}
          <span className={nickName}>{user?.nickname}</span>
          <p className={mainText}>{content}</p>
          {image ? <img src={image} className={uploadImage} alt="" /> : null}
          <div className={tagBox}>
            {hashTag?.length > 1
              ? hashTag?.map((item, index) => {
                  return <span key={index}>#{item}</span>;
                })
              : null}
          </div>
          {localStorage.getItem("id") == user?.userId && editMode === false ? (
            <div className={dotButton}>
              <DotButton onClick={onClickDotButton} />
            </div>
          ) : null}
        </div>
      )}

      <button className={styles.likeIcon}>
        <img src={Like} alt="하트" />
        <span>좋아요</span>
      </button>
      <Comment id={id.id} />
    </div>
  );
};

export default DetailPage;
