import React from "react";
import BoardBanner from "../Common/BoardBanner/BoardBanner";
import Category from "../Common/Category/Category";

const SideProjectList = () => {
  return (
    <>
      <BoardBanner
        boardName="사이드 프로젝트"
        boardGuide="나에게 맞는 프로젝트나 스터디/모임을 찾아 참여해보세요."
        write="모집하기"
        path="/sideproject/write"
      />
      <Category category1="프론트엔드" category2="백엔드" />
    </>
  );
};

export default SideProjectList;
