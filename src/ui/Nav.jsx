import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavComponent = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;

  height: 70px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  place-items: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.87);
`;

function Nav() {
  return (
    <NavComponent>
      <div></div>
      <ul className="flex justify-between w-full mr-10 uppercase">
        <li className="text-md font-bold">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="text-md font-bold">
          <NavLink to={"/projects"}>Projects</NavLink>
        </li>
        <li className="text-md font-bold">
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    </NavComponent>
  );
}

export default Nav;
