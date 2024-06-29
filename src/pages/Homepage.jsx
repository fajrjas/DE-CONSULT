import styled from "styled-components";
import DE_LOGO from "../assets/DE_CONSULT_LOGO.jpg";
import EngrPhoto from "../assets/206f74a2-4e90-44bd-b415-81cb6c327523.jfif";
import Fajr from "../assets/eto na talga.jpg";
import { Link } from "react-router-dom";
import Nav from "../ui/Nav";
import { FaArrowDown } from "react-icons/fa";

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
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header className="md:grid-cols-custom-2fr-1fr">
        <Nav />
        <div className="flex flex-col justify-evenly h-full sm:h-[80%]">
          <h2 className="font-extrabold mt-16 lg:mt-28 text-5xl lg:text-6xl text-blue-600 pb-3">
            DE CONSULT
          </h2>
          <div className="pb-10">
            <p className="font-medium text-lg mb-8">
              DE Consult is an engineering consulting firm founded and
              established in 2020. It provides architecture, structure,
              interior, map design and quantity surveying, supervision, building
              information modeling and third party review of structural design.
            </p>
            <button
              onClick={() => scrollToElement("engineers")}
              className="rounded-full border-none bg-blue-900 hover:bg-blue-950 text-white text-lg py-2 px-10 mt-10 ease-in-out duration-200"
            >
              <div className="flex items-center flex-row gap-5">
                <span>Our&nbsp;members</span>{" "}
                <FaArrowDown className="self-end animate-bounce" />
              </div>
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
      <div
        className="bg-blue-900 grid place-items-start pt-10  lg:grid-cols-3 text-center min-h-full h-[80%] gap-6 pb-10"
        id="engineers"
      >
        <div className="max-w-[300px] sm:max-w-[400px]  mx-auto font-serif mt-8 lg:mt-20 grid  bg-slate-700 shadow-xl">
          <h1 className="font-bold text-xl md:text-2xl  text-center underline underline-offset-8 my-4 text-[#151b18be]">
            Senior Structural Engr. Almajid Idjas
          </h1>
          <p className="text-lg max-w-[70%] mx-auto text-white md:order-2  my-4">
            <span className="text-black font-bold">Engr. Almajid Idjas</span> is
            a structural engineer with more than 8 years of experience. He
            graduated from Western Mindanao State University (WMSU) with a civil
            engineering degree in 2016. Currently, he holds an executive
            position at DE CONSULT, leveraging his structural engineering
            expertise to contribute to the firm&apos;s success.
          </p>
          <div className=" place-self-center mx-auto my-4 md:order-1 w-[11em] h-[11em]">
            <img
              src={EngrPhoto}
              alt=""
              className="w-full h-full  border-none shadow-2xl  rounded-full"
            />
          </div>
        </div>
        <div className="max-w-[300px] sm:max-w-[400px]  mx-auto font-serif mt-8 lg:mt-20 grid  bg-slate-700 shadow-xl">
          <h1 className="font-bold text-xl md:text-2xl  text-center underline underline-offset-8 my-4 text-[#151b18be]">
            Software Developer. Alfajer Idjas
          </h1>
          <p className="text-lg max-w-[70%] mx-auto text-white md:order-2  my-4 space-y-16">
            <span className="text-black font-bold">Alfajer Idjas {"  "}</span> a
            recent graduate from Western Mindanao State University (WMSU) with
            an IT degree in 2023, Alfajer Idjas leverages his passion for
            technology to craft innovative solutions for DE CONSULT&apos;s
            software engineering team.
          </p>
          <div className=" place-self-center mx-auto my-4 md:order-1 w-[11em] h-[11em]">
            <img
              src={Fajr}
              alt=""
              className="w-full h-full  border-none shadow-2xl  rounded-full"
            />
          </div>
        </div>
        <div className=" max-w-[300px] sm:max-w-[400px]  mx-auto font-serif mt-8 lg:mt-20 grid  bg-slate-700 shadow-xl">
          <h1 className="font-bold text-xl md:text-2xl text-center underline underline-offset-8 my-4 text-[#151b18be] ">
            Arch. Radzmel Idjas
          </h1>
          <p className="text-lg max-w-[70%] mx-auto text-white md:order-2  my-4">
            <span className="text-black font-bold">
              Radzmel Idjas: Aspiring Architect
            </span>{" "}
            currently finalizing his Architecture degree at Western Mindanao
            State University (WMSU) in 2024, Radzmel Idjas is about to embark on
            his journey in the world of design. His passion for creating
            inspiring spaces is evident, and his time at WMSU has equipped him
            with the skills to translate ideas into reality.
          </p>
          <div className=" place-self-center mx-auto my-4 md:order-1 w-[11em] h-[11em]">
            <img
              src={EngrPhoto}
              alt=""
              className="w-full h-full  border-none shadow-2xl  rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
