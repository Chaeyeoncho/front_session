import styled from "styled-components";

const Contents = () => {
    return ( 
    <Gridcontainer>
        <img src="/img/post1.JPG" alt="post1" />
        <img src="/img/post2.JPG" alt="post2" />
        <img src="/img/post3.JPG" alt="post3" />
        <img src="/img/post1.JPG" alt="post1" />
        <img src="/img/post2.JPG" alt="post2" />
        <img src="/img/post3.JPG" alt="post3" />
        <img src="/img/post1.JPG" alt="post1" />
        <img src="/img/post2.JPG" alt="post2" />
        <img src="/img/post3.JPG" alt="post3" />
        <img src="/img/post1.JPG" alt="post1" />
        <img src="/img/post2.JPG" alt="post2" />
        <img src="/img/post3.JPG" alt="post3" />
        <img src="/img/post1.JPG" alt="post1" />
        <img src="/img/post2.JPG" alt="post2" />
        <img src="/img/post3.JPG" alt="post3" />
    </Gridcontainer>
    );
}
 
export default Contents;

const Gridcontainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-template-columns: repeat(auto-fill, minmax(350px, 3fr)); */
    gap: 5px;

    img {
    width: 100%;
    height: auto;
    object-fit: cover;
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
        padding: 20px;
        max-width: 1000px; /* 그리드 이미지 섹션의 최대 너비를 설정 */
        margin: 0 auto; /* 가운데 정렬 */
    }

    @media all and (max-width: 767px) {
        padding : 20px;
    }
`