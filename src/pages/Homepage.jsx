import styled from "styled-components";
import DE_LOGO from "../assets/DE_CONSULT_LOGO.jpg";
import EngrPhoto from "../assets/206f74a2-4e90-44bd-b415-81cb6c327523.jfif";
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
  return (
    <>
      <Header className="md:grid-cols-custom-2fr-1fr">
        <Nav />
        <div className="flex flex-col justify-evenly h-full sm:h-[80%]">
          <h2 className="font-extrabold mt-16 sm:mt-1 text-5xl lg:text-6xl text-blue-600 pb-3">
            DE CONSULT
          </h2>
          <div className="pb-10">
            <p className="font-medium text-lg mb-8">
              DE Consult is an engineering consulting firm founded and
              established in 2020. It provides architecture, structure,
              interior, map design and quantity surveying, supervision, building
              information modeling and third party review of structural design.
            </p>
            <button className="rounded-full border-none bg-blue-900 hover:bg-blue-950 text-white text-lg py-2 px-10 mt-10 ease-in-out duration-200">
              <a href="#engineers" className="flex items-center flex-row gap-5">
                <span>Our&nbsp;Engineers</span>{" "}
                <FaArrowDown className="self-end animate-bounce" />
              </a>
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
        className="bg-blue-900 grid place-items-start pt-10  md:grid-cols-3 text-center min-h-screen h-[80%] gap-6 pb-10"
        id="engineers"
      >
        <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto font-serif mt-8 lg:mt-20 grid  bg-slate-700 shadow-xl">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center underline underline-offset-8 my-4 text-[#151b18be]">
            Engr. Almajid Idjas
          </h1>
          <p className="text-sm md:text-xl max-w-[70%] mx-auto text-white md:order-2  my-4">
            <span className="text-black font-bold">Engr. Almajid Idjas</span> is
            a structural engineer with nearly seven years of experience. He
            graduated from Western Mindanao State University (WMSU) with a civil
            engineering degree in 2016. Currently, he holds an executive
            position at DE CONSULT, leveraging his structural engineering
            expertise to contribute to the firm&apos;s success.
          </p>
          <div className=" place-self-center mx-auto my-4 md:order-1 w-[12em] h-[12em]">
            <img
              src={EngrPhoto}
              alt=""
              className="w-full h-full  border-none shadow-2xl mix-blend-plus-darker rounded-full"
            />
          </div>
        </div>
        <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto font-serif mt-8 lg:mt-20 grid  bg-slate-700 shadow-xl">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center underline underline-offset-8 my-4 text-[#151b18be]">
            Engr. Shawn Mendez
          </h1>
          <p className="text-lg md:text-xl max-w-[70%] mx-auto text-white md:order-2  my-4">
            <span className="text-black font-bold">Engr. Shawn Mendez</span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            sapiente totam quis, in incidunt error vero voluptates nam officiis
            optio.
          </p>
          <div className=" place-self-center mx-auto my-4 md:order-1 w-[12em] h-[12em]">
            <img
              src={EngrPhoto}
              alt=""
              className="w-full h-full  border-none shadow-2xl mix-blend-plus-darker rounded-full"
            />
          </div>
        </div>
        <div className=" max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto font-serif mt-8 lg:mt-20 grid  bg-slate-700 shadow-xl">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl  text-center underline underline-offset-8 my-4 text-[#151b18be] ">
            Engr. Jawpakkal
          </h1>
          <p className="text-lg md:text-xl max-w-[70%] mx-auto text-white md:order-2  my-4">
            <span className="text-black font-bold"> Engr. Jawpakkals</span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis
            quibusdam cum ut provident numquam explicabo aspernatur aperiam
            accusantium, perspiciatis porro atque commodi laborum, debitis ipsam
            at consequatur assumenda? Voluptatibus?
          </p>
          <div className=" place-self-center mx-auto my-4 md:order-1 w-[12em] h-[12em]">
            <img
              src={EngrPhoto}
              alt=""
              className="w-full h-full  border-none shadow-2xl mix-blend-plus-darker rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
