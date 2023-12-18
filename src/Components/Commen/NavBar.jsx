import React, { useEffect, useState } from 'react';
import ButtonSign from './ButtonSign';
import logo from '../../assets/logo.png';

// import closeIcon from "..closeIcon";
// import CloseIcon from "./CloseIcon";
import HeroIcons from './HeroIcons';
// import EvenOld from "../EvenOld";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  // const NavBarListName = ['Home', 'Profile', 'Projects', 'ContectUs'];

  const NavbarLinks = [
    {
      name: 'Home',
      link: '#home',
    },
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Skills',
      link: '#skills',
    },
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('event occured');
      window.scrollY > 5 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <>
      <nav
        className={` ${
          sticky ? 'bg-white/20 ' : 'bg-gray-500  '
        } rounded sticky  top-0 flex justify-around items-center drop-shadow-xl `}
      >
        <div className="flex items-center py-4 ">
          {/* <img className=" bg-red-300 h-8" src={logo} alt="Waqas" /> */}

          <p className="text-2xl text-white ">
            Muhammad
            <span className="text-xl  text-amber-400 font-mono">
              Waqas
            </span>{' '}
          </p>
        </div>
        <div className="flex ">
          <ul className="text-xs hidden md:contents">
            {NavbarLinks.map((item, index) => (
              <li
                className="px-2 hover:text-amber-400 duration-300"
                key={index}
              >
                <a href={item?.link}>{item?.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-x-3  hidden lg:block  ">
          <ButtonSign color="amber" text={'SignIn'} />
          <ButtonSign text={'SignUp'} />
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HeroIcons />
        </div>
        <div
          className={` ${
            isOpen ? 'top-[120%] left-50' : 'top-[-1000%]'
          } md:hidden absolute duration-300  flex bg-slate-300 rounded  flex-col   justify-center  border-2 w-[93%] h-60`}
        >
          <div className=" flex justify-center  ">
            <ul className="py-4 space-y-1  ">
              {NavbarLinks.map((item, index) => (
                <li
                  className="px-2 text-2xl text-gray-600 font-mono  hover:text-amber-400  duration-300"
                  key={index}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <a href={item?.link}>{item?.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex  justify-center gap-2">
            <ButtonSign color="amber" text={'SignIn'} />
            <ButtonSign text={'SignUp'} />
          </div>
        </div>
      </nav>
      {/* Drawer */}
    </>
  );
};

export default NavBar;
{
  /* <nav className=" flex sticky top-0 h-screen  justify-between ">
<div className="  ">
  <h1 className="font-bold">Muhammad Waqas</h1>
</div>
<div className="hidden md:block ">
  <ul className="flex gap-2 bg-white text-gray-900 py-2 px-6 rounded-bl-full">
    {NavBarListName.map((item, index) => {
      return (
        <li
          className="hover:cursor-pointer hover:text-amber-400 duration-300"
          key={index}
        >
          {item}
        </li>
      );
    })}
  </ul>
</div>
<div className="md:block hidden space-x-4">
  <ButtonSign
    btnText={"Sign-In"}
    styleClass={
      "bg-amber-400 text-white p-2  text-sm hover:bg-white hover:text-amber-300 duration-300"
    }
  />
  <ButtonSign
    btnText={"Sign-Up"}
    styleClass={
      " text-amber-400  text-sm  p-2 hover:bg-amber hover:text-white border-2 duration-300  border-amber-200"
    }
  />
</div>
<div className="md:hidden" onClick={() => setIsOpen((e) => !e)}>
  <HeroIcons />
</div>
</nav>

<div
className={`${
  isOpen ? "right-0" : "right-[-100%]"
} md:hidden absolute right-0 top-0 h-full flex-wrap  justify-center  w-[50%] bg-white text-black duration-300 `}
>
<ul className="flex flex-col  items-center  space-y-4">
  {NavBarListName.map((item, index) => {
    return (
      <li
        className="hover:cursor-pointer hover:text-white  py-1 hover:bg-amber-400 duration-300"
        key={index}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item}
      </li>
    );
  })}
</ul>
<div className="flex justify-center mx-4 space-x-4">
  <ButtonSign
    btnText={"Sign-In"}
    styleClass={
      "bg-amber-400 text-white text-xs hover:bg-white hover:text-amber-300 duration-300"
    }
  />
  <ButtonSign
    btnText={"Sign-Up"}
    styleClass={
      " text-amber-400 text-xs   hover:bg-amber hover:text-white border-2 duration-300  border-amber-200"
    }
  />
</div>
</div> */
}
