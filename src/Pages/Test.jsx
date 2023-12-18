import React from 'react';
import Button from '../Components/Commen/Button';
import InputTask from '../Components/Commen/inputTask';
import Search from '../Components/Commen/Search';
import MicIcon from '../Components/Commen/MicIcon';

const Test = () => {
  const obj = [
    { Src: 'fa-duotone fa-user', placeholder: 'username' },
    {
      Src: 'fa-duotone fa-lock',
      placeholder: 'password',
    },
    {
      Src: 'fa-solid fa-user-plus',
      placeholder: 'signUp',
    },
  ];

  const alertFunc = () => {
    alert('Hello');
  };
  return (
    // task#1
    // <div className="h-screen flex justify-center items-center gap-4 ">
    //   <Button text={'Logon'} event={alertFunc} />
    //   <Button text={'LogoOut'} event={alertFunc} />
    // </div>
    //<i class="fa-duotone fa-magnifying-glass"></i>

    // <InputTask
    //   placeholder="Enter your text"
    //   //   icon={<i class="fa-duotone fa-magnifying-glass"></i>}
    //   icon={<Search />}
    //   iconMic={<MicIcon />}
    // />

    //task#2
    <div className="flex flex-col justify-center items-center gap-5">
      {obj &&
        obj.map((item, index) => {
          return <InputTask icon={item?.Src} placeholder={item?.placeholder} />;
        })}
      <button className="rounded text-2xl text-white py-4 px-2 bg-amber-400">
        login
      </button>
    </div>
  );
};

export default Test;
