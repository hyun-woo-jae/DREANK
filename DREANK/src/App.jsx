import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Mainpage/Mainpage";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer";
import MyPage from "./pages/MyPage";
import Chatting from "./pages/Chatting";
import CalendarPage from "./pages/CalendarPage";
import Password from "./components/PasswordChange";
import Check from "./components/Check";
import Mystudy from "./components/Mystudy";
import Study from "./components/Study";
import Waiting from "./components/Waiting";
import RejectionStudy from "./components/RestrictionStudy";
import RejectionPost from "./components/RestrictionPost";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import Withdrawal from "./components/Withdrawal";
import Notification from "./components/Notification";
import MakeStudy from "./pages/MakeStudy/MakeStudy";
import styled from "styled-components";

import EntireBoard from "./pages/board/EntireBoard";
import EntireBoardDetail from "./pages/board/EntireBoardDetail";
import EntireStudy from "./pages/study/EntireStudy";
import WritingEditor from "./pages/board/WritingEditor";
// import PostDetail from './pages/board/PostDetail';
import SearchScheduleDetail from "./pages/study/SearchScheduleDetail";
import SearchStudyResult from "./pages/study/SearchStudyResult";

const RootWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

function App() {
  const pages = [
    { path: "/", component: MainPage },
    { path: "/signup", component: Signup },
    { path: "/login", component: Login },
    { path: "/mypage", component: MyPage },
    { path: "/chat", component: Chatting },
    { path: "/calendar", component: CalendarPage },
    { path: "/password", component: Password },
    { path: "/check", component: Check },
    { path: "/mystudy", component: Mystudy },
    { path: "/study", component: Study },
    { path: "/waiting", component: Waiting },
    { path: "/rejection_study", component: RejectionStudy },
    { path: "/rejection_post", component: RejectionPost },
    { path: "/comments", component: Comments },
    { path: "/posts", component: Posts },
    { path: "/Withdrawal", component: Withdrawal },
    { path: "/notification", component: Notification },
    { path: "/makestudy", component: MakeStudy },
    { path: "/board", component: EntireBoard },
    { path: "/board-detail", component: EntireBoardDetail },
    { path: "/board-editor", component: WritingEditor },
    { path: "/bord-postdetail", component: MakeStudy },

    { path: "/study-board", component: EntireStudy },
    { path: "/study-search-schedule", component: SearchScheduleDetail },
    { path: "/study-search-tag", component: SearchStudyResult },
  ];

  return (
    <RootWrap>
      <BrowserRouter>
        <Routes>
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={
                <>
                  <Navbar />
                  <Content>
                    <page.component />
                  </Content>
                  <Footer />
                </>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </RootWrap>
  );
}

export default App;
