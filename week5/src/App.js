import {Routes, Route} from "react-router-dom
"
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
//import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
      <Login />
      }
    </div>
  );
}

export default App;
