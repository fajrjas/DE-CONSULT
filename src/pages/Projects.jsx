// import ReactImageGallery from "react-image-gallery";
// import DE_LOGO from "../assets/DE_CONSULT_LOGO.jpg";
import styled from "styled-components";
import proj1 from "../assets/2022-02-15_12-44-49.jpg";
import proj2 from "../assets/ffda33a8b11eb583a494cfb689e81713.jpg";
import proj3 from "../assets/Manateq2.jpg";
import proj4 from "../assets/Salwa Rd View2C.jpg";
import proj5 from "../assets/4AD.jpg";
import proj6 from "../assets/2022-02-15_12-25-47.jpg";
import proj7 from "../assets/2022-02-15_12-27-27.jpg";
import proj8 from "../assets/2022-02-15_12-36-57.jpg";
import proj9 from "../assets/AERIAL 01-FULL.jpg";
import "react-image-gallery/styles/css/image-gallery.css";

import {
  BsChevronCompactDown,
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
const projectImage = [
  {
    id: 1,
    thumbnail: [
      {
        original: proj1,
      },
    ],
    original: proj1,
    engineer: "Almajid Idjas",
    about: "Compound Buildings",
  },
  {
    id: 2,
    thumbnail: [
      {
        original: proj2,
      },
    ],
    original: proj2,
    engineer: "Justine Bibe",
    about: "Luxury Compound Buildings ",
  },
  {
    id: 3,
    thumbnail: [
      {
        original: proj3,
      },
    ],
    original: proj3,
    engineer: "Neil armweak",
    about: "Seaside Compound Buildings",
  },
  {
    id: 4,
    thumbnail: [
      {
        original: proj4,
      },
    ],
    original: proj4,
    engineer: "Jason Status",
    about: "Salwa Rd Building",
  },
  {
    id: 5,
    thumbnail: [
      {
        original: proj1,
      },
      {
        original: proj2,
      },
      {
        original: proj3,
      },
      {
        original: proj4,
      },
      {
        original: proj5,
      },
    ],
    original: proj5,
    engineer: "Kyrie Irbeng",
    about: "AL MATTAR SHOWROOM",
  },
  {
    id: 6,
    thumbnail: [
      {
        original: proj1,
      },
      {
        original: proj2,
      },
      {
        original: proj3,
      },
      {
        original: proj4,
      },
      {
        original: proj5,
      },
    ],
    original: proj6,
    engineer: "Yaoiming",
    about: "Tall Gray Building Projects",
  },
  {
    id: 7,
    thumbnail: [
      {
        original: proj1,
      },
      {
        original: proj2,
      },
      {
        original: proj3,
      },
      {
        original: proj4,
      },
      {
        original: proj5,
      },
    ],
    original: proj7,
    engineer: "Bob the builder",
    about: "Dagbus Garden Orchid building",
  },
  {
    id: 8,
    thumbnail: [
      {
        original: proj1,
      },
      {
        original: proj2,
      },
      {
        original: proj3,
      },
      {
        original: proj4,
      },
      {
        original: proj5,
      },
    ],
    original: proj8,
    engineer: "Karim Makdum",
    about: "Mosque Building Island",
  },
  {
    id: 9,
    thumbnail: [
      {
        original: proj1,
      },
      {
        original: proj2,
      },
      {
        original: proj3,
      },
      {
        original: proj4,
      },
      {
        original: proj5,
      },
    ],
    original: proj9,
    engineer: "Alexadre the great taste creamy white",
    about: "Bya Empire Building",
  },
];

const ProjectContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  color: #294ed4;
  /* width: 70%; */
  height: 100%;

  /* background-color: rgba(128, 128, 128, 0.1); */
`;

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexSPC, setCurrentIndexSPC] = useState(0);

  const prevSlide = (type) => {
    if (type === "project")
      return setCurrentIndex((currentImage) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? projectImage.length - 1 : currentImage - 1;
      });

    setCurrentIndexSPC((currentImage) => {
      if (projectImage[currentIndex].thumbnail.length === 1)
        return currentImage;
      const isFirstSlide = currentIndexSPC === 0;
      return isFirstSlide
        ? projectImage[currentIndex].thumbnail.length - 1
        : currentImage - 1;
    });
  };
  const nextSlide = (type) => {
    if (type === "project")
      return setCurrentIndex((currentImage) => {
        const isLastSlide = currentIndex === projectImage.length - 1;
        console.log(isLastSlide);
        return isLastSlide ? 0 : currentImage + 1;
      });

    setCurrentIndexSPC((currentImage) => {
      if (projectImage[currentIndex].thumbnail.length === 1)
        return currentImage;

      const isLastSlide =
        currentIndexSPC === projectImage[currentIndex].thumbnail.length - 1;
      console.log(isLastSlide);
      return isLastSlide ? 0 : currentImage + 1;
    });
  };

  const goToSlide = (index, type) => {
    if (type === "project") return setCurrentIndex(index);
    setCurrentIndexSPC(index);
  };

  return (
    <div>
      <ProjectContainer className="max-w-[310px] mx-auto md:max-w-[600px] lg:max-w-[1200px]">
        <div className="grid lg:grid-cols-3 lg:items-center lg:max-w-[1200px] gap-12 select-none mt-56 md:mt-0">
          <div className="col-span-1 flex flex-col">
            <h1 className="text-[ #294ed4] text-3xl font-bold lg:text-5xl lg:mt-15 mb-6">
              DE CONSULT PROJECTS
            </h1>
            <p className="text-[ #2d50d1] font-semibold text-2xl pt-2">
              We representing to you our projects.
            </p>
          </div>

          {/* Projects  */}
          <div className="lg:col-span-2 ">
            <header>
              <h2 className="text-white text-4xl lg:mt-28 lg:mb-2">
                {projectImage[currentIndex].about}
              </h2>
            </header>
            <div className="lg:max-w-[1200px] h-[500px] lg:w-full mx-auto pb-16 px-4 relative group transition-all max-w-[300px]">
              <div
                style={{
                  backgroundImage: `url(${projectImage[currentIndex].original}`,
                }}
                className=" w-full h-full rounded-2xl bg-center bg-contain  bg-no-repeat duration-500  "
              ></div>
              {/* Left Arrow */}
              <div
                className="hidden group-hover:block absolute top-[45%] translate-y-[-45%] md:top-[50%] -translate-x-0 md:translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer
          "
                onClick={() => prevSlide("project")}
              >
                <BsChevronCompactLeft size={30} />
              </div>
              {/* Right Arrow> */}
              <div
                className="hidden group-hover:block absolute top-[45%] translate-y-[-45%] md:top-[50%] -translate-x-0 md:translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer
          "
                onClick={() => nextSlide("project")}
              >
                <BsChevronCompactRight size={30} />
              </div>
              <a
                className="hover:translate-y-[20px] hover:color[#294ed4] absolute bottom-[3em] ml-[-18px] lg:left-[15em] text-2xl p-2 text-white cursor-pointer duration-200 ease-in-out animate-bounce
            text-center
          "
                // onClick={() => toDetails("project")}
                href="#details"
              >
                <p className="ml-[-12px] text-lg font-semibold">Details</p>
                <BsChevronCompactDown size={30} />
              </a>
              <div className="flex - top-4 justify-center py-2">
                {projectImage.map((img, index) => (
                  <div
                    onClick={() => goToSlide(index, "project")}
                    className="text-2xl cursor-pointer"
                    key={index}
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specific Project info */}
        <div className="lg:col-span-2 " id="details">
          <header className="w-[300px]"></header>
          <div className="lg:max-w-[1200px] h-[500px] lg:w-full m-auto pb-16 px-4 relative group transition-all max-w-[300px]">
            <div
              style={{
                backgroundImage: `url(${
                  projectImage[currentIndex].thumbnail.length === 1
                    ? projectImage[currentIndex].thumbnail[0].original
                    : projectImage[currentIndex].thumbnail[currentIndexSPC]
                        .original
                }`,
              }}
              className=" w-full h-full rounded-2xl bg-center bg-contain  bg-no-repeat duration-500  "
            ></div>
            {/* Left Arrow */}
            {projectImage[currentIndex].thumbnail.length === 1 ? (
              ""
            ) : (
              <div
                className="hidden group-hover:block absolute top-[45%] translate-y-[-45%] md:top-[50%] -translate-x-0 md:translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer
          "
                onClick={prevSlide}
              >
                <BsChevronCompactLeft size={30} />
              </div>
            )}
            {/* Right Arrow> */}
            {projectImage[currentIndex].thumbnail.length === 1 ? (
              ""
            ) : (
              <div
                className="hidden group-hover:block absolute top-[45%] translate-y-[-45%] md:top-[50%] -translate-x-0 md:translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer 
          "
                onClick={nextSlide}
              >
                <BsChevronCompactRight size={30} />
              </div>
            )}

            <div className="flex top-4 justify-center py-2">
              {projectImage[currentIndex].thumbnail.map((img, index) => (
                <div
                  onClick={() => goToSlide(index)}
                  className="text-2xl cursor-pointer"
                  key={index}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details of specific project */}

        <div className="h-full select-none mb-10 mt-8">
          <h2 className="text-xl text-white my-4 font-semibold">
            Project name:{" "}
            <span className="text-2xl text-white font-bold ">
              {" "}
              {projectImage[currentIndex].about}
            </span>
          </h2>
          <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            officia, natus voluptatum ducimus labore vel. Iure error
            necessitatibus repellendus dolore, eius, sunt sequi nesciunt
            architecto alias aut placeat laboriosam minus illo recusandae odio.
            Labore corporis enim voluptate nulla culpa quam atque odio natus
            amet, dicta ex. Earum aliquam quae enim.
          </p>
          <p className="text-red-600 mt-6 font-semibold">
            Name of engineer of this project:{" "}
          </p>
          <span className=" text-red-900 font-bold text-xl capitalize underline">
            Engr. {projectImage[currentIndex].engineer}
          </span>
        </div>
      </ProjectContainer>
    </div>
  );
}

export default Projects;
