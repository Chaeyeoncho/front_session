import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
      <Login />
      {
        // <Routes>
        //   <Route path="/" element={<Main />} />
        //   <Route path="/login" element={<Login />} />
        //   <Route path="/signin" element={<Signin />} />
        // </Routes>
      }
    </div>
  );
}

export default App;
