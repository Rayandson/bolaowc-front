import {BrowserRouter, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Groups from "./Groups";
import Matches from "./Matches";
import SignUp from "./SignUp";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <AppContainer>
      <Routes>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/matches" element={<Matches/>}/>
        <Route path="/groups" element={<Groups/>}/>
      </Routes>
    </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`

`