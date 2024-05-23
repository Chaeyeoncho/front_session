// 전역 스타일 컴포넌트 > 하위 모든 컴포넌트에 해당 스타일 일괄 적용

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 200px;
        padding : 0;
        overflow: scroll;

        @media all and (min-width: 768px) and (max-width: 1023px) {
            margin: 0 auto;
            overflow: scroll;
        }
    
        @media all and (max-width: 767px) {
            margin: 0;
            overflow: scroll;
        }
    }    
`;
export default GlobalStyle;
