import { useState } from "react";
import { Route, Routes } from "react-router";
import reactLogo from "./assets/react.svg";
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignUpPage';
import MainPage from "./pages/MainPage";
import QuestionPage from "./pages/QuestionPage";
import CommunityPage from "./pages/CommunityPage";
import SideProjectPage from "./pages/SideProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/qustion" element={<QuestionPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/sideproject" element={<SideProjectPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;