import React, {useState } from "react";
import {useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import Like from "@/assets/heartActivate.svg";
import Comment from "@/components/Common/Comment/Comment";
import { ReactComponent as Profile } from "@/assets/profile.svg";
import { dbService } from "@/firebase/app";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import styles2 from "@/components/Common/WriteInput/WriteInput.module.css";
import {useRecoilValue } from 'recoil';
import { getQuestion} from "@/@store/getQuestionData";
import DotButton from "@/components/Common/DotButton/DotButton";


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
} = styles;

const DetailPage = () => {
  let id = useParams();
  
  
  let [editMode, setEditMode] = useState(false);
  let [ubdateTitle, setUpdateTitle] = useState("");
  let [ubdateContent, setUpdateContent] = useState("");

  let questionData = useRecoilValue(getQuestion)
  let data = questionData.filter((item)=>item.id === id.id)[0]


  let { title, content, image, user, category, hashTag, like, hits } = data;
  console.log(title)
// 게시글 수정

const onChange = (e) =>{
  const {target:{value,name}}= e;
  if(name==="title"){
    setUpdateTitle(value)
  } else if(name==="content"){
    setUpdateContent(value)
  }
}

const onUpdate = async (e) => {
  e.preventDefault()
  // 임의의 데이터 path를 지정 추후 로그인 인증후 변경 필요
  let testPath = "DNEzD3roLzTP3f4JkeJC"
  const ok = window.confirm("수정하시겠습니까")
  if(ok){
    await updateDoc(doc(dbService, "question", testPath),{title:ubdateTitle, content:ubdateContent});
    setEditMode(!editMode)
  }else{
    console.log("취소")
  }
};






  return (
    <div className={container}>
  {  editMode ? <div>
          <form onSubmit={onUpdate}>
          <input
            id={id}
            type="text"
            name="title"
            placeholder="제목을 입력해주세요."
            className={styles2.title}
            onChange={onChange}
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
            onChange={onChange}
            required
          ></textarea>
          <button
            title=""
          >
            수정
          </button>
        </form>
          <button
            onClick={() => {
              setEditMode(false)
            }}
            title="취소"
          >
            취소
          </button>
        </div>
 :  <div>
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
          {hashTag?.length > 1 ?hashTag?.map((item, index) => {
            return <span key={index}>#{item}</span>;
          }):null}
        </div>
      </div>}

      <button className={styles.likeIcon}>
        <img src={Like} alt="하트" />
        <span>좋아요</span>
      </button>
      {localStorage.getItem("id") == user?.userId && editMode === false ? (
        <>
        <button >삭제</button>
        <button onClick={()=>{setEditMode(true)}}>수정</button>
        </>
      ) : null}
      <Comment id={id.id} />
    </div>
  );
};

export default DetailPage;
