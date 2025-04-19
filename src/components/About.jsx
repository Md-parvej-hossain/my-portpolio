import { FaLaptopCode } from 'react-icons/fa6';
import pro from '../assets/images/pro.jpg';
const About = () => {
  return (
    <div className="bg-[#0F1629] ">
      <div className="flex justify-center py-10">
        <div>
          <img
            // src="https://i.ibb.co.com/ym8wVg49/Whats-App-Image-2025-02-05-at-15-55-02-80d5502e.jpg"
            src={pro}
            alt=""
            className="shadow-2xl object-cover rounded-full w-[300px] h-[300px] lg:mr-10"
          />{' '}
          <div className="text-white text-center items-center mb-5">
            <h1 className="text-5xl font-bold">MD PARVEJ</h1>
            <p className="font-bold text-[#F8B90C] py-2">
              Web Developer (MERN)
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-[#F8B90C]">ABOUT ME</h2>
        <p className="text-white py-4">
          I’m a Front End Web developer who is passionate about making
          <span className="bg-amber-200 text-black font-semibold px-2">
            error-free websites
          </span>
          with 100% client satisfaction. I am passionate about learning and
          sharing my knowledge with others as publicly as possible. I love to
          solve real-world problems. I am strategic and goal-oriented, and I
          always work with an end goal in mind. Over the past years, I created
          100s of websites for my clients. I pride myself on doing quality work
          and maintaining excellent communication. Most of the time I work with
          WordPress but some technologies I enjoy working with include ReactJS,
          JavaScript, and PHP.
        </p>
      </div>
      <div className="text-white md:flex bg-[#1C2229] p-4 rounded-3xl mt-10 gap-6 w-11/12 mx-auto">
        <div>
          <FaLaptopCode className="text-[#F8B90C] text-6xl" />
        </div>
        <div>
          <p>2018 - Present</p>
          <h3>Web Development Farm</h3>
          <p>
            I am working on a remote job in a USA-based company as a WordPress
            Theme Developer and plugin Developer. My main job is to create a
            WordPress theme, customization, and create based on client needs.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
