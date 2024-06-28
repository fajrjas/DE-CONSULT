import styled from "styled-components";
// import Homepage from "./pages/Homepage";
import { Outlet } from "react-router-dom";
import Nav from "./ui/Nav";

const Main = styled.div`
  height: max-content;
  background-color: black;
  width: 100dvw;
`;

function AppLayout() {
  return (
    <Main>
      <Nav />
      <Outlet />
    </Main>
  );
}

export default AppLayout;
