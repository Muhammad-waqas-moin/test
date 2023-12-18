import React, { useState } from 'react';
import CommonButton from '../Commen/figmaTaskCommon/CommonButton';
import BarIcon from '../Commen/figmaTaskCommon/BarIcon';

const Navbar = () => {
  const NavbarLinks = [
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'services',
      link: '#services',
    },
    {
      name: 'Our Work',
      link: '#work',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const isbarOpenFunc = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex justify-between ">
        <div>
          <p>GD.</p>
        </div>
        <div>
          <BarIcon event={isbarOpenFunc} />
        </div>
      </nav>
      <div
        className={`${
          isOpen ? 'top-[10%] ' : 'top-[-100%]'
        } w-full h-screen absolute bg-[#070917] duration-300 `}
      >
        <div className="flex">
          <ul>
            {NavbarLinks &
              NavbarLinks.map((item, index) => {
                console.log(item?.name);
                return <li key={index}>{item?.name}</li>;
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
