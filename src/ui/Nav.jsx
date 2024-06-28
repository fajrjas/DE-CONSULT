import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import DE_LOGO from "../assets/DE_CONSULT_LOGO.jpg";
const NavComponent = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;

  height: 90px;

  /* display: grid;
  grid-template-columns: 2fr 1fr;
  place-items: center; */

  z-index: 5;
  background-color: rgba(0, 0, 0, 0.87);
`;

const StyledNavLink = styled(NavLink)`
  /* &.active,
  &.active:visited {
    text-underline-offset: 6px;
    text-decoration: underline;
  } */
  /* &.active:hover {
    text-decoration: inherit;
  } */
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: currentColor;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
    transform-origin: bottom right;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &.active,
  &.active:visited {
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

function Nav() {
  return (
    <NavComponent>
      <div className="max-w-[80em] flex justify-between items-center mx-auto h-full">
        <Link to={"/"} className={"w-[4em] h-[4em]"}>
          <img
            src={DE_LOGO}
            alt=""
            className="w-full h-full border-none rounded-full"
          />
        </Link>
        {/* hover:underline hover:underline-offset-[6px] transition-all delay-200 ease-out */}
        <ul className="flex justify-between mr-10 capitalize gap-20  text-2xl">
          <li className="text-md font-bold ">
            <StyledNavLink to={"/"}>Home</StyledNavLink>
          </li>
          <li className="text-md font-bold ">
            <StyledNavLink to={"/projects"}>Projects</StyledNavLink>
          </li>
          <li className="text-md font-bold ">
            <StyledNavLink to={"/about"}>About</StyledNavLink>
          </li>
        </ul>
      </div>
    </NavComponent>
  );
}

export default Nav;
