import Box from '@mui/joy/Box';
import MyMessages from '../components/MyMessages';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Chatting() {

  const username = localStorage.getItem('nickname');
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      alert("로그인 후 이용해주세요!");
      navigate("/login");
    } 
  });

  return (
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <MyMessages />
        </Box>
      </Box>
  );
}
