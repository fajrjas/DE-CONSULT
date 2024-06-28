import styled from "styled-components";
import DE_LOGO from "../assets/DE_CONSULT_LOGO.jpg";
import EngrPhoto from "../assets/206f74a2-4e90-44bd-b415-81cb6c327523.jfif";
import { Link } from "react-router-dom";
import Nav from "../ui/Nav";

const Header = styled.header`
  height: 100dvh;
  width: 100dvw;
  color: white;
  padding: 2rem 5rem;
  display: grid;
  gap: 2rem;
  background-color: black;
`;

function Homepage() {
  return (
    <>
      <Header className="md:grid-cols-custom-2fr-1fr">
        <Nav />
        <div className="flex flex-col justify-evenly h-full sm:h-[80%]">
          <h2 className="font-extrabold mt-10 sm:mt-1 text-5xl lg:text-6xl text-blue-600 pb-3">
            DE CONSULT
          </h2>
          <div>
            <p className="font-medium text-lg mb-8">
              DE Consult is an engineering consulting firm founded and
              established in 2020. It provides architecture, structure,
              interior, map design and quantity surveying, supervision, building
              information modeling and third party review of structural design.
            </p>
            <button className="rounded-full border-none bg-blue-900 hover:bg-blue-950 text-white text-lg py-2 px-10 mt-10 ease-in-out duration-200">
              <Link to={"/projects"}>Our Projects</Link>
            </button>
          </div>
        </div>
        <div className="w-full hidden lg:block h-[70%] self-center">
          <img
            src={DE_LOGO}
            alt=""
            className="w-full h-full lg:animate-pulse-custom  rounded-sm lg:border-none lg:shadow-inner"
          />
        </div>
      </Header>
      <div className="bg-blue-800 grid place-items-center text-center min-h-screen h-full">
        <div className="max-w-[500px] mx-auto font-serif mt-8 grid gap-6">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center underline underline-offset-8 my-4">
            Engr. Almajid Idjas
          </h1>
          <p className="text-lg md:text-xl max-w-[70%] mx-auto text-black md:order-2  my-4">
            Engr. Almajid Idjas is a structural engineer with nearly seven years
            of experience. He graduated from Western Mindanao State University
            (WMSU) with a civil engineering degree in 2016. Currently, he holds
            an executive position at DE CONSULT, leveraging his structural
            engineering expertise to contribute to the firm&apos;s success.
          </p>
          <div className=" place-self-center mx-auto my-4 md:order-1">
            <img
              src={EngrPhoto}
              alt=""
              className="w-full  border-none border-collapse border-spacing-5 rounded-md shadow-2xl mix-blend-plus-darker"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
