import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProfileContent = () => {
  return (
    <Profilecontentcontainer>
      <div className="nickname">
        <h3>조채연</h3>
      </div>
      <div className="editBtn">
        <StyledLink to="/profileEdit">Edit Profile</StyledLink>
      </div>
      <Userinfo>
        <ul>
          <li>서울과학기술대학교</li>
          <li>멋쟁이사자처럼 12기 아기사자</li>
          <li>
            <a
              href="https://www.instagram.com/chae._.yo__/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/chae._.yo__/
            </a>
          </li>
        </ul>
      </Userinfo>
    </Profilecontentcontainer>
  );
};

export default ProfileContent;

const Profilecontentcontainer = styled.div`
  @media all and (max-width: 767px) {
    font-size: 80%;
  }
  .editBtn {
    width: 100px;
    padding: 5px;
    text-align: center;
    background-color: lightgray;
    border-radius: 5px;
  }
  .editBtn:hover {
    cursor: pointer;
  }
`;

const Userinfo = styled.div`
  ul {
    list-style: none;
    padding-left: 0px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: blue;
  }
`;
