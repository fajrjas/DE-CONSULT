import styled from "styled-components";
import DE_LOGO from "../assets/DE_CONSULT_LOGO.jpg";
import { Link } from "react-router-dom";

const Header = styled.header`
  height: 100dvh;
  color: white;
  padding: 2rem 5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  background-color: black;
`;

function Homepage() {
  return (
    <Header>
      <div className="flex flex-col justify-evenly h-full">
        <h2 className="font-extrabold text-6xl text-blue-600 ">DE CONSULT</h2>
        <div>
          <p className="font-medium text-lg">
            DE Consult is an engineering consulting firm founded and established
            in 2020. It provides architecture, structure, interior, map design
            and quantity surveying, supervision, building information modeling
            and third party review of structural design.
          </p>
          <button className="rounded-full border-none bg-blue-900 hover:bg-blue-950 text-white text-lg py-2 px-10 mt-10 ease-in-out duration-200">
            <Link to={"/projects"}>Our Projects</Link>
          </button>
        </div>
      </div>
      <div className="w-full h-[70%] self-center">
        <img src={DE_LOGO} alt="" className="w-full h-full" />
      </div>
    </Header>
  );
}

export default Homepage;
