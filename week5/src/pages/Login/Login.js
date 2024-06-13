import { useEffect, useState } from "react";
import styled from "styled-components";

const Login = () => {
  const baseURL = "http://127.0.0.1:8080";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isJoinButtonDisabled, setIsJoinButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    toggleJoinButton();
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setIsJoinButtonDisabled(true);
  };

  const toggleJoinButton = () => {
    let isEmailValid = true;
    let isPasswordValid = true;

    if (email && !validateEmail(email)) {
      isEmailValid = false;
    }

    if (password && password.length < 7) {
      isPasswordValid = false;
    }

    setIsJoinButtonDisabled(
      !(isEmailValid && isPasswordValid && email && password)
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/insta/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (response.status === 200) {
        window.location.href = "/";
      } else if (response.status === 400) {
        setErrorMessage(
          "로그인에 실패하였습니다. 아이디와 비밀번호를 확인하세요."
        );
      } else {
        setErrorMessage("서버 오류가 발생하였습니다. 나중에 다시 시도하세요.");
      }
    } catch (error) {
      setErrorMessage(
        "네트워크 오류가 발생하였습니다. 인터넷 연결을 확인하세요."
      );
    }
  };

  return (
    <LoginContainer>
      <LoginBorder>
        <img src="../img/text_logo.png" alt="로고" class="logo" />
        <form
          className="loginForm"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <div className="inputBox">
            <input
              type="text"
              className="email"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              className="pw"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="buttonBox">
            <button
              type="submit"
              className={
                isJoinButtonDisabled ? "disabledButton" : "enabledButton"
              }
              disabled={isJoinButtonDisabled}
            >
              로그인
            </button>
          </div>
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        </form>
        <div className="orBox">
          <hr />
          <span>또는</span>
          <hr />
        </div>
        <div className="toFacebook">
          <a href="#">Facebook으로 로그인</a>
        </div>
        <div className="forgetPw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </LoginBorder>
      <SigninBorder>
        <p className="regiText">
          계정이 없으신가요? <a href="/signin">가입하기</a>
        </p>
      </SigninBorder>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 350px;
  margin: 100px auto 0;
  min-height: 500px;
`;

const LoginBorder = styled.div`
  border: 1px solid #dbdbdb;
  height: 402px;
  padding: 0 40px;

  .logo {
    width: 195px;
    margin: 30px auto 0;
    display: block;
  }

  .inputBox {
    margin-top: 30px;
  }

  .errorMessage {
    color: red;
    font-size: 11px;
    margin: 0 0 6px 2px;
  }

  input {
    display: block;
    border-radius: 4px;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: #fafafa;
    border: none;
    border: 1px solid #dfdfdf;
    &::placeholder {
      font-size: 12px;
      font-weight: 350;
    }
    &:focus {
      outline: none;
      border: 1px solid gray;
    }
  }

  .email {
    margin-bottom: 6px;
  }

  .pw {
    margin-bottom: 12px;
  }

  button {
    width: 100%;
    padding: 8px 0;
    border-radius: 8px;
    border: none;
    width: 100%;
    font-weight: bold;
    color: white;
    transition: background-color 0.4s;
    text-align: center;
    cursor: pointer;
  }

  button.disabledButton {
    background-color: #67b5fa;
  }

  button.enabledButton {
    background-color: #3981e5;
  }

  .loginBox button:disabled {
    cursor: default;
  }

  .loginBox button[type="submit"]:not([disabled]) {
    background-color: #0095f6;
  }

  .orBox {
    margin-top: 10px;
    hr {
      display: inline-block;
      width: 39%;
      border: 1px solid #dbdbdb;
    }
    span {
      display: inline-block;
      margin: 3%;
      color: #757575;
      font-size: 13px;
      font-weight: bold;
    }
  }

  .toFacebook {
    margin: 22px 0 28px 0;
    a {
      text-decoration: none;
      color: #385285;
      display: block;
      text-align: center;
      font-weight: bold;
    }
  }

  .forgetPw {
    a {
      text-decoration: none;
      color: #385285;
      display: block;
      text-align: center;
      font-size: 12px;
    }
  }
`;

const SigninBorder = styled.div`
  border: 1px solid #dfdfdf;
  height: 63px;
  margin-top: 10px;
  .regiText {
    text-align: center;
    padding: 7px 0;
    font-size: 14px;
    a {
      margin-left: 4px;
      text-decoration: none;
      color: #0095f6;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
