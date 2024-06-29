import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import DE_LOGO from "../assets/DE_CONSULT_LOGO.jpg";
import { TbLetterX } from "react-icons/tb";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const NavComponent = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;

  background-color: rgba(0, 0, 0, 0.87);
`;

const StyledNavLink = styled(NavLink)`
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
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((state) => !state);
  };

  return (
    <NavComponent className="z-50 h-[80px] sm:h-[90px]">
      <div className="flex justify-around items-center md:flex-row h-full relative bg-black">
        <Link
          to={"/"}
          className={`${isToggle ? "hidden" : "block"} w-[4em] h-[4em]`}
        >
          <img
            src={DE_LOGO}
            alt=""
            className="w-full h-full border-none rounded-full"
          />
        </Link>
        <div
          className={`${isToggle ? "hidden" : "block"} text-2xl md:hidden`}
          onClick={handleToggle}
        >
          <HiMenu />
        </div>
        <div
          className={`${
            isToggle
              ? "translate-y-0 opacity-100 bg-blue-900"
              : "-translate-y-full opacity-0"
          } transform transition duration-700 ease-in-out md:translate-y-0 md:opacity-100  absolute z-50 top-0 left-0 right-0 h-[70dvh] md:h-full text-center md:static`}
        >
          <div className="flex flex-col justify-evenly items-center w-full h-full mt-6">
            <div
              className="md:hidden self-end mr-5 text-2xl border-2 border-black"
              onClick={handleToggle}
            >
              <TbLetterX />
            </div>
            <ul className="w-full h-full flex flex-col justify-center md:flex-row md:justify-between md:mr-10 lg:m-0 capitalize gap-20 text-xl lg:text-2xl">
              <li className="text-md font-bold">
                <StyledNavLink to={"/"} onClick={() => setIsToggle(false)}>
                  Home
                </StyledNavLink>
              </li>
              <li className="text-md font-bold">
                <StyledNavLink
                  to={"/projects"}
                  onClick={() => setIsToggle(false)}
                >
                  Projects
                </StyledNavLink>
              </li>
              <li className="text-md font-bold">
                <StyledNavLink to={"/about"} onClick={() => setIsToggle(false)}>
                  About
                </StyledNavLink>
              </li>
              <li className="text-md font-bold">
                <StyledNavLink
                  to={"/contact"}
                  onClick={() => setIsToggle(false)}
                >
                  Contact Us
                </StyledNavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavComponent>
  );
}

export default Nav;
