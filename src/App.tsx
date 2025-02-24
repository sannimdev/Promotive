import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useRecoilValue } from "recoil";
import ResetGlobalStyle from "./ResetGlobalStyle";

import Weather from "components/Weather";
import DarkMode from "components/DarkMode";
import Pomodoro from "components/Pomodoro";

import ToDoList from "./pages/ToDoList";
import DND from "./pages/DND";

import { darkLightMode, ISDARK } from "./recoil/DnDToDoAtom";
import Momentum from "pages/Momentum";

function App() {
  const isDark = useRecoilValue(darkLightMode);

  useEffect(() => {
    localStorage.setItem(ISDARK, JSON.stringify(isDark));
  }, [isDark]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ResetGlobalStyle />
      <DarkMode />
      <Routes>
        <Route path="/" element={<Momentum />} />
        <Route path="weather" element={<Weather />} />
        <Route path="pomodoro" element={<Pomodoro />} />
        <Route path="DND" element={<DND />} />
        <Route path="toDo" element={<ToDoList />} />
      </Routes>
      <Footer></Footer>
    </ThemeProvider>
  );
}

const Footer = styled.footer`
  margin-top: 15rem;
  width: 100%;
  display: grid;
  justify-content: center;
  z-index: 999999;
`;
export default App;
