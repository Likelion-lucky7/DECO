import styles from "@/components/CommunityPage/CommunityDetail.module.css";
import Like from "@/assets/heartActivate.svg";
import Comment from "@/components/Common/Comment/Comment";
import { getCommunity } from "@/@store/getCommunityData";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { ReactComponent as Profile } from "@/assets/profile.svg";

console.log(getCommunity);

const CommunityDetail = () => {
  let id = useParams();
  let communityData = useRecoilValue(getCommunity);
  let data = communityData.filter((item) => item.id === id.id)[0];
  let { title, content, image, user, hashTag } = data;

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.textTitle}>{title}</h2>
        {user?.profile === "" ? (
          <Profile className={styles.profileImege} />
        ) : (
          <img src={user?.profile} className={styles.profileImege} alt="" />
        )}
        <span className={styles.nickName}>{user?.nickname}</span>
        <p className={styles.mainText}>{content}</p>
        {image ? (
          <img src={image} className={styles.uploadImage} alt="" />
        ) : null}
        <div className={styles.tagBox}>
          {hashTag?.length > 1
            ? hashTag?.map((item, index) => {
                return <span key={index}>#{item}</span>;
              })
            : null}
        </div>
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
