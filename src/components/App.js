import {BrowserRouter, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import { UserContextProvider } from "../contexts/UserContext";
import GlobalStyle from "./GlobalStyle";
import GroupsPage from "./GroupsPage";
import MatchesPage from "./MatchesPage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <AppContainer>
    <UserContextProvider>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/" element={<SignInPage/>}/>
        <Route path="/matches" element={<MatchesPage/>}/>
        <Route path="/groups" element={<GroupsPage/>}/>
      </Routes>
      </UserContextProvider>
    </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`

`