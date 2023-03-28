import React from "react";
import Main from "@/components/MainPage/MainPage";
import { useRecoilState } from "recoil";
// import { authUserState } from "@/@store/authUserState";

const MainPage = () => {
  // const [authUser, setAuthUser] = useRecoilState(authUserState);
  // console.log(authUser);
  // React.useEffect(() => {
  //   setTimeout(() => setAuthUser({ name: "동경" }), 2000);
  // }, [setAuthUser]);
  return (
    <div>
      <Main />
    </div>
  );
};

export default MainPage;
