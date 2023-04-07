import styles from "@/components/CommunityPage/CommunityDetail.module.css";
import Like from "@/assets/heartActivate.svg";
import Comment from "@/components/Common/Comment/Comment";
import { getCommunity } from "@/@store/getCommunityData";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

console.log(getCommunity);

const CommunityDetail = () => {
  let id = useParams();
  console.log("나는 useParams 아이디여", id);

  let communityData = useRecoilValue(getCommunity);
  console.log("나는 커뮤니티 데이터!", communityData);

  let data = communityData.filter((item) => item.id === id.id)[0];
  console.log("나는 필터했지롱.", data);

  let { title, content, image } = data;

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.textTitle}>{title}</h2>
        <span className={styles.nickname}>{"user"?.nickname}</span>
        <p className={styles.mainText}>{content}</p>
        {image ? (
          <img src={image} className={styles.uploadImage} alt="" />
        ) : null}
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
