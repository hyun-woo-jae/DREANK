<<<<<<< HEAD
/* eslint-disable */
=======
import React, { useEffect, useState } from "react";
>>>>>>> 4bf29b44bcda7aedc73c3e286014ab943f8f7f83
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
<<<<<<< HEAD
import Divider from "@mui/joy/Divider";

// Sample data for studies
const studies = [
  {
    name: "Data Science Study Group",
    field: "Computer Science",
    members: 12,
  },
  {
    name: "History Enthusiasts",
    field: "Humanities",
    members: 8,
  },
];
=======
import instance from "../shared/Request"
>>>>>>> 4bf29b44bcda7aedc73c3e286014ab943f8f7f83

export default function Study() {
  const [studies, setStudies] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    // 스터디 데이터를 가져오는 함수
    const fetchStudies = async () => {
      try {
        const response = await instance.get(`/study/search/study/${userId}`);
        setStudies(response.data);
      } catch (error) {
        console.error("Failed to fetch studies:", error);
      }
    };

    fetchStudies();
  }, [userId]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#FFFFFF",
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 4, color: "#334EAC", fontWeight: "bold", fontSize: 30 }}
      >
        가입한 스터디 관리
      </Typography>

<<<<<<< HEAD
      {studies.map((study, index) => (
        <Card
          key={index}
          sx={{
            mb: 2,
            p: 3,
            boxShadow: 2,
            border: "1px solid #e0e0e0",
            width: "700px",
            borderRadius: "16px",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            {study.name}
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#666" }}>
            #{study.field}
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#666", mb: 2 }}>
            회원수: {study.members}명
          </Typography>
          <Button variant="plane" sx={{ width: "100%" }}>
            탈퇴하기
          </Button>
        </Card>
      ))}
=======
      {studies.length > 0 ? (
        studies.map((study, index) => (
          <Card
            key={index}
            sx={{
              mb: 2,
              p: 3,
              boxShadow: 2,
              border: "1px solid #e0e0e0",
              width: "700px",
              borderRadius: "16px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {study.name}
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#666" }}>
              #{study.field}
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#666", mb: 2 }}>
              회원수: {study.members}명
            </Typography>
            <Button variant="plane" sx={{ width: "100%" }}>
              탈퇴하기
            </Button>
          </Card>
        ))
      ) : (
        <Typography>가입한 스터디가 없습니다.</Typography>
      )}
>>>>>>> 4bf29b44bcda7aedc73c3e286014ab943f8f7f83
    </Box>
  );
}
