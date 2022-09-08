import React from "react";
import Pluscard from "../../asset/pluscard.png";
import Meme from "../../asset/Meme.png";
import Frame from "../../asset/Frame.png";
import "./project.css";
import { BsGithub } from "react-icons/bs";

function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center">
      <h5>My</h5>
      <h1 className="mb-6"> Projects</h1>
      <div className="w-screen  px-10  gap-8 flex flex-col justify-center items-center">
        <div class="max-w-xl mx-auto rounded-xl transition ease-in-out delay-150 bg-#171c28 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-l from-sky-600 to-indigo-400; duration-300  border-solid border-2 border-sky-500 overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-60"
                src={Meme}
                alt="Meme"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Hackathon project
              </div>
              <a
                target="_blank"
                href="https://github.com/baysaa006/nft-project"
                class="block my-4 text-lg leading-tight font-medium text-black hover:underline"
                rel="noreferrer"
              >
                <BsGithub /> Github link
              </a>
              <p class="mt-2 parag text-white mb-2">
                Participated in the competition to develop a social network
                application for young people using the emerging blockchain
                technology and won the INOVATION project.
              </p>
              <a
                target="_blank"
                href="https://hackthon-eight.vercel.app/"
                className="bg-indigo-500 p-2 text-black rounded-xl mt-2"
                rel="noreferrer"
              >
                {" "}
                View demo
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-xl mx-auto rounded-xl transition ease-in-out delay-150 bg-#171c28 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-l from-sky-600 to-indigo-400; duration-300  border-solid border-2 border-sky-500 overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-60"
                src={Pluscard}
                alt="Man looking at item at a store"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Personal-project
              </div>
              <a
                target="_blank"
                href="https://github.com/baysaa006/card"
                class="block my-4 text-lg leading-tight font-medium text-black hover:underline"
                rel="noreferrer"
              >
                <BsGithub /> Github link{" "}
              </a>
              <p class="mt-2 parag text-white mb-2 ">
                I am currently developing a SaaS product. Digital business cards
                for small businesses and business owners. The technologies I
                used were AWS AMPLIFY+NEXT JS+MATERIAL UI+VERCEL.
              </p>
              <a
                target="_blank"
                href="https://card1-nine.vercel.app/"
                className="bg-indigo-500 p-2 text-black rounded-xl mt-2"
                rel="noreferrer"
              >
                {" "}
                View demo
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-xl mx-auto rounded-xl transition ease-in-out delay-150 bg-#171c28 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-l from-sky-600 to-indigo-400; duration-300  border-solid border-2 border-sky-500 overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-left md:h-full md:w-60"
                src={Frame}
                alt="Man looking at item at a store"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Part-time
              </div>
              <a
                target="_blank"
                href="https://github.com/baysaa006/playpoint"
                class="block my-4 text-lg leading-tight font-medium text-black hover:underline"
                rel="noreferrer"
              >
                <BsGithub /> Github link{" "}
              </a>
              <p class="mt-2 parag text-white mb-2 ">
                Participated in the development of marketing applications with
                the purpose of advertising. Based on the design provided by the
                designer, the UI was completed using Flutter.
              </p>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/19yoT_xbkpsEqJFHZMggNuZeBMNfqpV8Q/view?fbclid=IwAR0DYVAWcyP4U0hTMw7kWBlXyVhHBEGLkV-oPa22DtZ_lBqHGN3fYCzx2ok"
                className="bg-indigo-500 p-2 text-black rounded-xl mt-2"
                rel="noreferrer"
              >
                {" "}
                View demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/6 h-2 bg-white  my-8 rounded-lg "></div>
    </div>
  );
}

export default Projects;
