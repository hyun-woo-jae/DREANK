import { useState } from "react";
import * as t from "./styles";

const MakeStudy = () => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [num, setNum] = useState("");
  const [tagError, setTagError] = useState("태그를 입력해주세요!");
  const [nameError, setNameError] = useState("스터디 이름을 입력해주세요!");
  const [numError, setNumError] = useState("모집 인원을 입력해주세요");
  const [isValid, setIsValid] = useState(false); // 전체 폼 유효성 상태
  const [selectedDay, setSelectedDay] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
    if (value.trim() !== "") {
      setNameError("");
    } else {
      setNameError("스터디 이름을 입력해주세요!");
    }
  };

  const handleTagChange = (value) => {
    setTag(value);
    if (value.trim() !== "") {
      setTagError("");
    } else {
      setTagError("태그를 입력해주세요!");
    }
  };

  const handleAgeChange = (value) => {
    setNum(value);
    const parsedAge = parseInt(value);
    if (isNaN(parsedAge)) {
      setNumError("모집인원은 숫자로 입력해주세요!");
    } else {
      setNumError("");
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleTimeClick = (time) => {
    if (!selectedStartTime) {
      setSelectedStartTime(time);
      setShowTimeDropdown(true); // 시작 시간을 클릭하면 타임스크롤이 나타나도록 변경
    } else if (!selectedEndTime) {
      setSelectedEndTime(time);
      setShowTimeDropdown(false);
    }
  };

  const toggleTimeDropdown = () => {
    setShowTimeDropdown(!showTimeDropdown);
  };

  const times = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];

  useState(() => {
    if (nameError || numError || tagError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [nameError, numError, tagError]);

  const handleJoin = () => {
    console.log({
      username: name,
      num,
      tag,
    });

    alert("회원가입에 성공하였습니다!");
  };

  const handleLoginRedirect = () => {
    console.log("Redirecting to login page...");
  };

  return (
    <t.Container>
      <t.Title>
        <h3>스터디 만들기</h3>
      </t.Title>
      <t.InputContainer>
        <input
          id="name_input"
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder="스터디 이름"
        />
        <div className="error">{nameError}</div>
      </t.InputContainer>

      <t.InputContainer>
        <input
          id="info_age"
          type="text"
          value={num}
          onChange={(e) => handleAgeChange(e.target.value)}
          placeholder="모집인원"
        />
        <div className="error">{numError}</div>
      </t.InputContainer>

      <t.WeekdaysInputContainer>
        <input
          id="weekdays_input"
          type="text"
          value={selectedDay || "요일"}
          onChange={() => {}}
          placeholder="요일"
          onClick={toggleDropdown}
          style={{ color: "gray" }}
        />

        {showDropdown && (
          <t.WeekdaysList>
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
              <t.WeekdaysItem key={day} onClick={() => handleDayClick(day)}>
                {day}
              </t.WeekdaysItem>
            ))}
          </t.WeekdaysList>
        )}
      </t.WeekdaysInputContainer>

      <t.WeekdaysInputContainer>
        <input
          id="time_input"
          type="text"
          value={`${
            selectedStartTime
              ? `${selectedStartTime} ${
                  selectedEndTime ? `~ ${selectedEndTime}` : "~"
                }`
              : "시간대"
          }`}
          onChange={() => {}}
          placeholder="시간대"
          onClick={toggleTimeDropdown}
          style={{
            color: selectedStartTime || selectedEndTime ? "black" : "gray",
          }}
        />

        {showTimeDropdown && (
          <t.WeekdaysList>
            {times.map((time) => (
              <t.WeekdaysItem key={time} onClick={() => handleTimeClick(time)}>
                {time}
              </t.WeekdaysItem>
            ))}
          </t.WeekdaysList>
        )}
      </t.WeekdaysInputContainer>
      <t.InputContainer>
        <input
          id="tag_input"
          type="text"
          value={tag}
          onChange={(e) => handleTagChange(e.target.value)}
          placeholder="태그"
        />
        <div className="error">{tagError}</div>
      </t.InputContainer>
      <t.InputContainer2>
        <input
          id="info_introduction"
          type="text"
          placeholder="소개글을 작성해주세요"
        />
      </t.InputContainer2>
      <t.Button
        id="joinBtn"
        onClick={handleJoin}
        isValid={isValid}
        disabled={!isValid}
      >
        완료
      </t.Button>
      <t.BottomLinksContainer>
        <t.BottomLink>다른 스터디를 구경해볼까요?</t.BottomLink>
        <t.BottomLink>
          <t.LoginLink onClick={handleLoginRedirect}>
            모임 찾기로 이동하기
          </t.LoginLink>
        </t.BottomLink>
      </t.BottomLinksContainer>
    </t.Container>
  );
};

export default MakeStudy;