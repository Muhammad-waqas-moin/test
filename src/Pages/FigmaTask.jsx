import React from 'react';
import Navbar from '../Components/figmaTaskComponents/Navbar';

const FigmaTask = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default FigmaTask;

//  <div
// className={` ${
//     isOpen ? 'top-[120%] left-50' : 'top-[-1000%]'
//   } md:hidden absolute duration-300  flex bg-slate-300 rounded  flex-col   justify-center  border-2 w-[93%] h-60`}
// >
//   <div className=" flex justify-center  ">
//     <ul className="py-4 space-y-1  ">
//       {NavbarLinks.map((item, index) => (
//         <li
//           className="px-2 text-2xl text-gray-600 font-mono  hover:text-amber-400  duration-300"
//           key={index}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <a href={item?.link}>{item?.name}</a>
//         </li>
//       ))}
//     </ul>
//   </div>
//   <div className="flex  justify-center gap-2">
//     <ButtonSign color="amber" text={'SignIn'} />
//     <ButtonSign text={'SignUp'} />
//   </div>
// </div>
