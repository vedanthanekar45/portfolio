import { LuGithub } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiEjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="mt-12">
      <div className="w-full relative rounded-xl bg-[#f1f1f1] h-auto p-4 my-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-black text-3xl">The Wanderer</h1>
            <div className="flex items-center space-x-3 mt-[5px] text-2xl">
              <FaNodeJs className="text-green-600" />
              <SiExpress className="text-black" />
              <GrMysql className="text-blue-700" />
              <SiEjs className="text-[#630226]" />
            </div>
          </div>
          <div>
            <a
              href="https://github.com/vedanthanekar45/the-wanderer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub className="text-black text-3xl mr-4 font-thin" />
            </a>
          </div>
        </div>
        <hr className=" mt-4 left-4 right-4 border-gray-300" />
        <div>
          <h1 className="mt-2 text-black py-2">
            A travel companion application designed to help users navigate new
            destinations. Responsible for building the core backend
            infrastructure with a MySQL database.
          </h1>
        </div>
      </div>

      <div className="w-full relative rounded-xl bg-[#f1f1f1] h-auto p-4 my-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-black text-3xl">BookTalk</h1>
            <div className="flex items-center space-x-3 mt-[5px] text-2xl">
              <SiMongodb className="text-green-700" />
              <SiExpress className="text-black" />
              <FaReact className="text-blue-500" />
              <FaNodeJs className="text-green-600" />
            </div>
          </div>
          <div className="flex">
            <a
              href="https://github.com/vedanthanekar45/BookTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub className="text-black text-3xl mr-8 font-thin" />
            </a>
            <a
              href="https://booktalk-66lw.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoOpenOutline className="text-black text-3xl mr-4 font-thin" />
            </a>
          </div>
        </div>
        <hr className=" mt-4 left-4 right-4 border-gray-300" />
        <div>
          <h1 className="mt-2 text-black py-2">
            A minimalistic chat application made with the MERN stack. Made to
            extend my knowledge of real-time applications using Sockets.
          </h1>
        </div>
      </div>

      <div className="w-full relative rounded-xl bg-[#f1f1f1] h-auto p-4 my-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-black text-3xl">NovelNest</h1>
            <div className="flex items-center space-x-3 mt-[5px] text-2xl">
              <FaReact className="text-blue-500" />
              <SiDjango className="text-green-800" />
              <BiLogoPostgresql className="text-blue-700" />
            </div>
          </div>
          <div className="flex">
            <a
              href="https://github.com/vedanthanekar45/NovelNest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub className="text-black text-3xl mr-4 font-thin" />
            </a>
            <a
              href="https://novelnest-tr48.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoOpenOutline className="text-black text-3xl mr-4 font-thin" />
            </a>
          </div>
        </div>
        <hr className=" mt-4 left-4 right-4 border-gray-300" />
        <div>
          <h1 className="mt-2 text-black py-2">
            Basically a Letterboxd for books, and my take on Goodreads. Track
            your reading and discover new books. Made with React and Django.
            Book data extracted using the Google Books API.
          </h1>
        </div>
      </div>

      <div className="w-full relative rounded-xl bg-[#f1f1f1] h-auto p-4 my-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-black text-3xl">Kinoji</h1>
            <div className="flex items-center space-x-3 mt-[5px] text-2xl">
              <FaGolang className="text-blue-400" />
            </div>
          </div>
          <div className="flex">
            <a
              href="https://github.com/vedanthanekar45/kinoji"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub className="text-black text-3xl mr-4 font-thin" />
            </a>
            <a
              href="https://kinoji.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoOpenOutline className="text-black text-3xl mr-4 font-thin" />
            </a>
          </div>
        </div>
        <hr className=" mt-4 left-4 right-4 border-gray-300" />
        <div>
          <h1 className="mt-2 text-black py-2">
            A data engineering and analytics system with AI integration, to map
            trends in the film industry.
          </h1>
        </div>
      </div>

      <div className="w-full relative rounded-xl bg-[#f1f1f1] h-auto p-4 my-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-black text-3xl">Flow.js</h1>
            <div className="flex items-center space-x-3 mt-[5px] text-2xl">
              <SiDjango className="text-green-800" />
              <BiLogoPostgresql className="text-blue-700" />
            </div>
          </div>
          <div className="flex">
            <a
              href="https://github.com/vedanthanekar45/agora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub className="text-black text-3xl mr-4 font-thin" />
            </a>
            <a
              href="https://flowjs3d.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoOpenOutline className="text-black text-3xl mr-4 font-thin" />
            </a>
          </div>
        </div>
        <hr className=" mt-4 left-4 right-4 border-gray-300" />
        <div>
          <h1 className="mt-2 text-black py-2">
            A JavaScript library built on top of Three.js that abstracts and
            simplifies 3D rendering pipelines on browsers.
          </h1>
        </div>
      </div>
    </div>
  );
}
