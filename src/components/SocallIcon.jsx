import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
const SocallIcon = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <a
        href="https://www.facebook.com/md.parvej.hossen.587630?mibextid=ZbWKwL"
        className="group relative inline-flex items-center justify-center   rounded-full bg-gradient-to-r transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
      >
        <span className="block w-full  rounded-full bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
          <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
            <FaFacebook className="size-5 lg:size-10" />
            <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
          </span>
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/md-parvej-a15ab435a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="group relative inline-flex items-center justify-center   rounded-full bg-gradient-to-r transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
      >
        <span className="block w-full  rounded-full bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
          <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
            <FaLinkedin className="size-5 lg:size-10" />
            <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
          </span>
        </span>
      </a>
      <a
        href="https://github.com/Md-parvej-hossain"
        className="group relative inline-flex items-center justify-center   rounded-full bg-gradient-to-r transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
      >
        <span className="block w-full  rounded-full bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
          <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
            <FaSquareGithub className="size-5 lg:size-10" />
            <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
          </span>
        </span>
      </a>
      <a
        href="https://x.com/MdParvej3989551"
        className="group relative inline-flex items-center justify-center    rounded-full bg-gradient-to-r transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
      >
        <span className="block w-full  rounded-full bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
          <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
            <FaXTwitter className="size-5 lg:size-10" />
            <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
          </span>
        </span>
      </a>
    </div>
  );
};

export default SocallIcon;
