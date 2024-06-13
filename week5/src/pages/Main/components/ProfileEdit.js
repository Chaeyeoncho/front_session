import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProfileEditContainer = styled.div`
  @media all and (max-width: 767px) {
    font-size: 80%;
  }
  padding: 20px 15px;

  .editHeader {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .saveBtn {
    width: 35px;
    height: 30px;
    margin-right: 70px;
  }

  .editTitle {
    font-size: 30px;
  }

  .pic {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 30px 0;
  }

  .picEdit {
    color: #0095f6;
    font-size: 14px;
  }

  .txtTitle {
    color: gray;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .txtEdit {
    font-family: "Pretendard-Regular";
    width: 100%;
    font-size: 14px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid darkgray;
    &:focus {
      outline: none;
    }
  }
`;

const TxtArea = styled.textarea`
  font-family: "Pretendard-Regular";
  width: 100%;
  resize: none;
  font-size: 14px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid darkgray;
  &:focus {
    outline: none;
  }
`;

const Imgcontainer = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid gray;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 30px;

  @media all and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
  }
`;

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    bio: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/insta/user/info"
        );
        setProfile({
          name: response.data.name,
          username: response.data.username,
          bio: response.data.bio,
        });
      } catch (error) {
        console.error("프로필을 불러오는 데에 오류가 발생했습니다.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSave = () => {
    axios
      .put("http://localhost:8080/insta/user/info", profile)
      .catch((error) => {
        console.error("프로필 수정 도중에 오류가 발생했습니다.", error);
      });
  };

  return (
    <ProfileEditContainer>
      <div className="editHeader">
        <div className="left">
          <span className="save">
            <StyledLink to="/">
              <img
                src="/img/arrow.png"
                alt="back button"
                className="saveBtn"
                onClick={handleSave}
              />
            </StyledLink>
          </span>
          <span className="editTitle">
            <b>프로필 편집</b>
          </span>
        </div>
      </div>
      <div className="pic">
        <Imgcontainer>
          <img src="/img/profile.png" alt="profile_image" />
        </Imgcontainer>
        <div className="picEdit">사진 또는 아바타 수정</div>
      </div>
      <div className="txt">
        <div className="txtTitle">이름</div>
        <input
          className="txtEdit"
          type="text"
          name="name"
          value={loading ? "사용자 정보를 로드중입니다." : profile.name}
          onChange={handleInputChange}
          disabled={loading}
        />
        <div className="txtTitle">사용자 이름</div>
        <input // 한 줄 입력 받는 것
          className="txtEdit"
          type="text"
          name="username"
          value={loading ? "사용자 정보를 로드중입니다." : profile.username}
          onChange={handleInputChange}
          disabled={loading}
        />
        <div className="txtTitle">소개</div>
        <TxtArea //여러개의 줄 입력 받는것
          className="txtEdit"
          name="bio"
          value={loading ? "사용자 정보를 로드중입니다." : profile.bio}
          onChange={handleInputChange}
          disabled={loading}
        />
      </div>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
