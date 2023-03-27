import React from 'react'
import styles from "@/components/CommunityPage/CommunityDetail.module.css";
import Like from "@/assets/heartActivate.svg";
import Comment from "@/components/Common/Comment/Comment";

const CommunityDetail = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.textTitle}>제목</h2>
        <span className={styles.nickname}>{"user"?.nickname}</span>
        <p className={styles.mainText}>안녕안녕 컨텐츠</p>
        <img src={"image"} className={styles.uploadImage} alt="" />
        <div className={styles.tagBox}></div>
      </div>
      <button className={styles.likeIcon}>
        <img src={Like} alt="하트" />
        <span>좋아요</span>
      </button>
      {/* {localStorage.getItem("id") == user?.userId && editMode === false ? (
        <>
          <button>삭제</button>
          <button
            onClick={() => {
              setEditMode(true);
            }}
          >
            수정
          </button>
        </>
      ) : null}
      <Comment id={id.id} /> */}
      <Comment />
    </div>
  );
};

export default CommunityDetail;