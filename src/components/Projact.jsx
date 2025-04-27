/* eslint-disable no-irregular-whitespace */
import {
  FaArrowRight,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa6';
import pro1 from '../assets/images/pr1.png';
import pro2 from '../assets/images/pro2.png';
import pro3 from '../assets/images/pro3.png';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiAdobephotoshop, SiExpress } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';

const Projact = () => {
  return (
    <section className="my-8">
      <div className="text-center text-[#F8B90C] py-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold py-2">
          See Projact{' '}
        </h1>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-5 py-10 ">
        <div className="card bg-[#1C222A] p-4 shadow-sm hover:scale-105 transition rounded-lg">
          <figure>
            <img className="rounded-lg" src={pro1} alt="Shoes" />
          </figure>
          <div className="py-4 text-white">
            <h2 className="card-title text-2xl space-x-4 flex">
              <FaHtml5 />
              <FaCss3Alt />
              <FaReact />
              <RiTailwindCssFill />
              <DiMongodb />
              <SiExpress />
              <FaNodeJs />
            </h2>
            <h2 className="py-2">
              {' '}
              Those who are interested in learning different languages ​​can
              easily purchase courses from here and improve their language
              skills in a very nice way, through which they can increase their
              language learning skills.
            </h2>
            <div className="card-actions justify-end pt-4">
              <a
                href="https://github.com/Md-parvej-hossain/Language-Center-c"
                className=" flex justify-end items-center gap-2"
              >
                Project details <FaArrowRight className="text-[#F8B90C]" />
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-[#1C222A] p-4 shadow-sm hover:scale-110 transition rounded-lg">
          <figure>
            <img className="rounded-lg" src={pro2} alt="Shoes" />
          </figure>
          <div className="py-4 text-white">
            <h2 className="card-title text-2xl space-x-4 flex">
              <IoLogoJavascript />
              <FaReact />
              <FaBootstrap />
              <DiMongodb />
              <SiExpress />
              <FaNodeJs />
              <SiAdobephotoshop />
            </h2>
            <h2 className="py-2">
              Mind & Growth Hub is an innovative platform dedicated to fostering
              personal development, mental well-being, and professional growth.
            </h2>
            <div className="card-actions justify-end pt-4">
              <a
                href="https://github.com/Md-parvej-hossain/Mind-Growth-Hub?tab=readme-ov-file"
                className="flex justify-end items-center gap-2"
              >
                Project details <FaArrowRight className="text-[#F8B90C]" />
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-[#1C222A] p-4 shadow-sm hover:scale-110 transition rounded-lg">
          <figure>
            <img className="rounded-lg" src={pro3} alt="Shoes" />
          </figure>
          <div className="py-4 text-white">
            <h2 className="card-title text-2xl space-x-4 flex">
              <FaReact />
              <RiTailwindCssFill />
              <DiMongodb />
              <SiExpress />
              <FaNodeJs />
              <RiNextjsFill />
              <FaFigma />
            </h2>
            <h2 className="py-2">
              House Design is a website dedicated to showcasing innovative and
              stylish home design ideas. It provides inspiration for modern,
              classic, and custom home designs, featuring architecture, interior
              decor, and space optimization tips.
            </h2>
            <div className="  pt-4">
              <a
                href="https://github.com/Md-parvej-hossain/House-degin"
                className="btn flex justify-end items-center gap-2"
              >
                Project details
                <FaArrowRight className="text-[#F8B90C]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projact;
