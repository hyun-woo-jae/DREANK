import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Input,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/joy";
import SearchScheduleStudy from "./SearchScheduleStudy";
import "./Study.css";

const EntireStudy = () => {
  const [searchMode, setSearchMode] = React.useState("전체");

  const handleSearchModeChange = (event, newMode) => {
    if (newMode !== null) {
      setSearchMode(newMode);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        level="h1"
        component="div"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center", mb: 3, color: "#334EAC" }}
      >
        모임 찾기
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Input placeholder="Placeholder" sx={{ width: "790px" }} />
        <Button sx={{ ml: 2, backgroundColor: "#334EAC" }}>검색</Button>
      </Box>
      <Typography
        level="h5"
        component="div"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center", mb: 3 }}
      >
        당신에게 맞는 모임을 찾아드릴게요!
      </Typography>
      <Grid container spacing={3} sx={{ mb: 3, justifyContent: "center" }}>
        <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "center" }}></Grid>
        <Grid item xs={12} md={8} sx={{ display: "flex", justifyContent: "center" }}>
          <Card variant="outlined" sx={{ backgroundColor: "white", width: 200, height: 250, mr: 5 }}>
            <CardContent>
              <Typography level="h3">코테 대비 함께해요</Typography>
              <Typography>#삼성 코테 준비</Typography>
              <Typography>#프로그래머스</Typography>
              <Typography>#8주 완성</Typography>
              <Typography>#입문자 환영</Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ backgroundColor: "#334EAC" }}>Join!</Button>
            </CardActions>
          </Card>
          <Card variant="outlined" sx={{ backgroundColor: "white", width: 200, height: 250, mr: 5, ml: 5 }}>
            <CardContent>
              <Typography level="h3">오픽 AL 스터디</Typography>
              <Typography>Feature</Typography>
              <Typography>Feature</Typography>
              <Typography>Feature</Typography>
              <Typography>Feature</Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ backgroundColor: "#334EAC" }}>Join!</Button>
            </CardActions>
          </Card>
          <Box sx={{ position: "relative" }}>
            <Card variant="outlined" sx={{ backgroundColor: "white", width: 200, height: 250, ml: 5 }}>
              <CardContent>
                <Typography level="h3">스펙 같이 채워요</Typography>
                <Typography>#개발자 포트폴리오</Typography>
                <Typography>#백엔드</Typography>
                <Typography>#프론트엔드</Typography>
                <Typography>#네카라쿠배당토</Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ backgroundColor: "#334EAC" }}>Join!</Button>
              </CardActions>
            </Card>
            <Link to="/makestudy">
              <Button
                variant="plain"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  color: "black",
                  transform: "translate(10%, 130%)"
                }}
              >
                + 새 모임 만들기
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "center" }}></Grid>
      </Grid>
      <Box sx={{ mt: 10 }}> {/* 간격 추가 */}
        <SearchScheduleStudy />
      </Box>
    </Box>
  );
};

export default EntireStudy;
