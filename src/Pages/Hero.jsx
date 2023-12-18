import React from 'react';
import myImgae from '../assets/profilePicture.jpg';
import { TypeAnimation } from 'react-type-animation';
// import TypewriterComponent, { TypewriterClass } from 'typewriter-effect';
// import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaFacebookF, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

const Hero = () => {
  const iconsObj = [
    {
      icons: FaFacebookF,
      color: 'white',
      bgColor: 'bg-blue-800',
      hover: 'hover:bg-white',
      hoverText: 'hover:text-blue-800',
    },
    {
      icons: FaLinkedin,
      color: 'white',
      bgColor: 'bg-sky-700',
      hover: 'hover:bg-white',
      hoverText: 'hover:text-sky-700',
    },
    {
      icons: FaPinterest,
      color: 'white',
      bgColor: 'bg-red-800',
      hover: 'hover:bg-white',
      hoverText: 'hover:text-red-800',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row rounded">
      {/* right Section for profile photo */}
      <div className="h-screen  bg-gray-300 flex flex-1 justify-center items-center">
        <img className="h-80 rounded" src={myImgae} />
      </div>
      {/* left Section For details */}
      <div className="h-screen bg-gray-500 flex-1  flex justify-center items-center">
        <div className=" ">
          <p>Hello</p>
          <p className="text-2xl text-white ">
            Muhammad
            <span className="text-xl  text-amber-400 font-mono">
              Waqas
            </span>{' '}
          </p>
          {/* <p className="">Muhammad Waqas</p> */}
          {
            <TypeAnimation
              sequence={[`FrontEnd Developer`, 'Designer', 1000, '']}
              speed={50}
              // style={{ whiteSpace: 'pre-line', fontSize: '1rem' }}
              className=" font-400 text-sm"
              repeat={Infinity}
            />
          }
          <div className="flex gap-3">
            {iconsObj.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} text-white w-10 h-10 rounded-full flex justify-center items-center ${item?.hover}  ${item?.hoverText} `}
              >
                <p className={``}>
                  <item.icons />
                </p>
              </div>
            ))}
            {/* <FaGithub />
            <FaFacebook />
            <FaLinkedin /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
