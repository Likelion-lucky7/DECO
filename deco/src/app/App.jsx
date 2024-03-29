import { Route, Routes } from "react-router";
import NavBar from "@/components/Common/NavBar";
import styles from "./App.module.css";
import LoginPage from "@/pages/LoginPage";
import QuestionDetail from "@/components/QuestionPage/QuestionDetail/QuestionDetail";
import CommunityDetail from "@/components/CommunityPage/CommunityDetail";
import SideProjectDetail from "@/components/SideProjectPage/SideProjectDetail";
import QuestionWrite from "@/components/QuestionPage/QuestionWrite/QuestionWrite";
import CommunityWrite from "@/components/CommunityPage/CommunityWrite/CommunityWrite";
import SideProjectWrite from "@/components/SideProjectPage/sideProjectWrite/SideProjectWrite";
import SignUpPage from "@/pages/SignUpPage";
import MainPage from "@/pages/MainPage";
import QuestionPage from "@/pages/QuestionPage";
import CommunityPage from "@/pages/CommunityPage";
import SideProjectPage from "@/pages/SideProjectPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { Suspense } from "react";

function App() {
  return (
    <div className={styles.layout}>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          <Route path="/question/write" element={<QuestionWrite />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityDetail />} />
          <Route path="/community/write" element={<CommunityWrite />} />
          <Route path="/sideproject" element={<SideProjectPage />} />
          <Route path="/sideproject/:id" element={<SideProjectDetail />} />
          <Route path="/sideproject/write" element={<SideProjectWrite />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
