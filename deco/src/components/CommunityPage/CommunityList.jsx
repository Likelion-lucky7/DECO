import React from "react";
import BoardBanner from "../Common/BoardBanner/BoardBanner";

const CommunityList = () => {
  return (
    <BoardBanner
      boardName="커뮤니티"
      boardGuide="다양한 사람을 만나고 생각의 폭을 넓혀 보세요."
      write="작성하기"
      path="/community/write"
    />
  );
};

export default CommunityList;
