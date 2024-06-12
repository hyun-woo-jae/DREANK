import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import CardActions from "@mui/joy/CardActions";
import axios from "axios";

// Sample data for studies
const studies = [
  {
    id: 1,
    name: "Data Science Study Group",
    field: "Computer Science",
    members: 12,
  },
  {
    id: 2,
    name: "History Enthusiasts",
    field: "Humanities",
    members: 8,
  }
];

export default function Mystudy() {
  const handleEndRecruitment = async (studyId) => {
    try {
      await axios.put(`/study/${studyId}/status`, {
        status: "COMPLETE"
      });
      alert("스터디 모집이 종료되었습니다.");
    } catch (error) {
      console.error("Error ending recruitment", error);
      alert("모집 종료 중 오류가 발생했습니다.");
    }
  };

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
        내 스터디 관리
      </Typography>

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
          <CardActions sx={{ display: 'flex', justifyContent: 'space-between', mt:2 }}>
            <Button
              variant="plane"
              sx={{ width: '48%' }}
              onClick={() => handleEndRecruitment(study.id)}
            >
              모집 종료
            </Button>
            <Button variant="plane" sx={{ width: '48%' }}>
              삭제하기
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
