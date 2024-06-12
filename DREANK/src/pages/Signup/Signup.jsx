import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as t from "./styles";
import instance from "../../shared/Request";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [nameError, setNameError] = useState("닉네임을 입력해주세요!");
  const [emailError, setEmailError] = useState("이메일을 입력해주세요!");
  const [phoneError, setPhoneError] =
    useState("전화번호는 숫자로 입력해주세요!");
  const [passwordError, setPasswordError] =
    useState("비밀번호를 입력해주세요!");
  const [passwordCheckError, setPasswordCheckError] =
    useState("비밀번호를 다시 입력해주세요!");
  const [isValid, setIsValid] = useState(false); // 전체 폼 유효성 상태
  const navigate = useNavigate();
  //const [introductionError, setIntroductionError] = useState(""); // 새로운 오류 상태 추가
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };
  // 이름 입력 변경 처리
  const handleNameChange = (value) => {
    setName(value);
    if (value.trim() !== "") {
      setNameError("");
    } else {
      setNameError("이름을 입력해주세요!");
    }
  };
  // 이메일 입력 변경 처리
  const handleEmailChange = (value) => {
    setEmail(value);
    if (value.trim() === "") {
      setEmailError("이메일을 입력해주세요!");
    } else if (!validateEmail(value)) {
      setEmailError("이메일 양식에 맞게 다시 입력해주세요!");
    } else {
      setEmailError("");
    }
  };

  // 전화번호 입력 변경 처리
  const handlePhoneChange = (value) => {
    setPhone(value);
    const parsedPhone = parseInt(value);
    if (isNaN(parsedPhone)) {
      setPhoneError("전화번호는 숫자로 입력해주세요!");
    } else {
      setPhoneError("");
    }
  };

  // 비밀번호 입력 변경 처리

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value.trim() === "") {
      setPasswordError("비밀번호를 입력해주세요!");
    } else if (value.length < 4) {
      setPasswordError("최소 4자리 이상 입력해주세요.");
    } else if (value.length > 12) {
      setPasswordError("최대 12자리까지 입력 가능합니다.");
    } else if (
      !/[a-zA-Z]/.test(value) ||
      !/\d/.test(value) ||
      !/[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/.test(value)
    ) {
      setPasswordError("영어, 숫자, 특수문자를 모두 포함해주세요.");
    } else {
      setPasswordError("");
    }
  };

  // 비밀번호 확인 입력 변경 처리
  const handlePasswordCheckChange = (value) => {
    setPasswordCheck(value);
    if (value.trim() !== password.trim()) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckError("");
    }
  };

  const handleIntroductionChange = (value) => {
    setIntroduce(value);
  };

  // 이메일 유효성 검사 함수
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // 전체 폼 유효성 상태 업데이트
  useEffect(() => {
    if (
      nameError ||
      emailError ||
      phoneError ||
      passwordError ||
      passwordCheckError
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [nameError, emailError, phoneError, passwordError, passwordCheckError]);

  const handleJoin = async () => {
    if (!isValid) {
      alert("입력한 정보를 다시 확인해주세요.");
      return;
    }

    try {
      const response = await instance.post("/user", {
        // URL 수정
        nickname: name,
        email,
        phone,
        password,
        introduce,
      });

      if (response.status === 201) {
        alert("회원가입에 성공하였습니다!");
        navigate("/login");
      }
    } catch (error) {
      alert(
        `회원가입 실패: ${
          error.response?.data?.message || "서버 오류가 발생했습니다."
        }`
      );
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <t.Container>
      <t.Title>
        <h3>회원가입 페이지</h3>
      </t.Title>
      <t.InputContainer>
        <input
          id="name_input"
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder="닉네임을 입력해주세요"
        />
        <div className="error">{nameError}</div>
      </t.InputContainer>
      <t.InputContainer>
        <input
          id="info_email"
          type="email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="이메일을 입력해주세요"
        />
        <div className="error">{emailError}</div>
      </t.InputContainer>
      <t.InputContainer>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          placeholder="전화번호를 입력해주세요"
        />
        <div className="error">{phoneError}</div>
      </t.InputContainer>
      <t.InputContainer>
        <input
          id="info_password"
          type="password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
        />
        <div className="error">{passwordError}</div>
      </t.InputContainer>
      <t.InputContainer>
        <input
          id="info_password_check"
          type="password"
          value={passwordCheck}
          onChange={(e) => handlePasswordCheckChange(e.target.value)}
          placeholder="비밀번호 확인"
        />
        <div className="error">{passwordCheckError}</div>
      </t.InputContainer>
      <t.InputContainer2>
        <input
          id="info_introduction"
          type="text"
          value={introduce}
          onChange={(e) => handleIntroductionChange(e.target.value)}
          placeholder="소개글을 작성해주세요"
        />
        {/*<div className="error">{introductionError}</div>*/}
      </t.InputContainer2>
      <t.Button
        id="joinBtn"
        onClick={handleJoin}
        isValid={isValid}
        disabled={!isValid}
      >
        회원가입
      </t.Button>
      <t.BottomLinksContainer>
        <t.BottomLink>이미 계정이 있나요?</t.BottomLink>
        <t.BottomLink>
          <t.LoginLink onClick={handleLoginRedirect}>
            로그인 페이지로 이동하기
          </t.LoginLink>
        </t.BottomLink>
      </t.BottomLinksContainer>
      <t.ContractContainer>
        <t.ContractText>제 1장. 회원가입 약관 및 총칙</t.ContractText>
        <t.CheckboxContainer>
          <t.Checkbox
            type="checkbox"
            id="agreement1"
            checked={isChecked1}
            onChange={handleCheckboxChange1}
          />
          <t.AgreementLabel htmlFor="agreement1">
            (필수)본 회원약관을 읽었고, 이에 동의합니다
          </t.AgreementLabel>
        </t.CheckboxContainer>
        <t.ContractText>제 2장. 서비스 및 활용 안내</t.ContractText>
        <t.CheckboxContainer>
          <t.Checkbox
            type="checkbox"
            id="agreement2"
            checked={isChecked2}
            onChange={handleCheckboxChange2}
          />
          <t.AgreementLabel htmlFor="agreement2">
            (필수)본 회원약관을 읽었고, 이에 동의합니다.
          </t.AgreementLabel>
        </t.CheckboxContainer>
        <t.CheckboxContainer>
          <t.Checkbox
            type="checkbox"
            id="agreement3"
            checked={isChecked3}
            onChange={handleCheckboxChange3}
          />
          <t.AgreementLabel2 htmlFor="agreement3">
            (선택)마케팅 활용/정보 수신에 동의합니다.
          </t.AgreementLabel2>
        </t.CheckboxContainer>
      </t.ContractContainer>
    </t.Container>
  );
};

export default Signup;
