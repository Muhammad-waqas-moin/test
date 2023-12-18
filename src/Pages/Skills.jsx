import React from 'react';

const Skills = () => {
  const Skills = [
    {
      logo: 'fab fa-html5',
      level: 'advance',
      count: 86,
      color: 'text-red-500',
      hover: 'hover:bg-red-500',
    },
    {
      logo: 'fab fa-css3-alt',
      level: 'advance',
      count: 86,
      color: 'text-blue-500',
      hover: 'hover:bg-blue-500',
    },
    {
      logo: 'fab fa-js-square',
      level: 'advance',
      count: 86,
      color: 'text-yellow-500',
      hover: 'hover:bg-yellow-500',
    },
    {
      logo: 'fab fa-react',
      level: 'advance',
      count: 86,
      color: 'text-blue-500',
      hover: 'hover:bg-blue-500',
    },
    {
      logo: 'fab fa-node',
      level: 'advance',
      count: 86,
      color: 'text-green-500',
      hover: 'hover:bg-green-500',
    },
    {
      logo: 'fab fa-npm',
      level: 'advance',
      count: 86,
      color: 'text-red-500',
      hover: 'hover:bg-red-500',
    },
    {
      logo: 'fab fa-git-alt',
      level: 'advance',
      count: 86,
      color: 'text-red-500',
      hover: 'hover:bg-red-500',
    },
    {
      logo: 'fab fa-github',
      level: 'advance',
      count: 86,
      color: 'text-black',
      hover: 'hover:bg-black',
    },
    {
      logo: 'fab fa-sass',
      level: 'advance',
      count: 86,
      color: 'text-pink-500',
      hover: 'hover:bg-pink-500',
    },
    // {
    //   logo: 'fab fa-bootstrap',
    //   level: 'advance',
    //   count: 86,
    //   color: 'text-purple-500',
    // },
    // {
    //   logo: 'fab fa-php',
    //   level: 'advance',
    //   count: 86,
    //   color: 'text-blue-500',
    // },
    // {
    //   logo: 'fab fa-laravel',
    //   level: 'advance',
    //   count: 86,
    //   color: 'text-red-500',
    // },
    // {
    //   logo: 'fab fa-python',
    //   level: 'advance',
    //   count: 86,
    //   color: 'text-yellow-500',
    // },
  ];
  //   const skills = [
  //     {
  //       logo: 'fa-brands fa-react',
  //       level: 'Basic',
  //       count: '60',
  //     },
  //     {
  //       logo: 'fa-brands fa-react',
  //       level: 'Advance',
  //       count: '60',
  //     },
  //     {
  //       logo: 'fab fa-Html',
  //       level: 'Advance',
  //       count: '60',
  //     },
  //     {
  //       logo: 'fab fa-js',
  //       level: 'Advance',
  //       count: '60',
  //     },
  //   ];
  return (
    <section id="#skills" className="py-10 rounded bg-gray-600">
      <div className="flex justify-center items-center">
        <h3 className="text-4xl text-center text-white font-semibold">
          My<span className="text-amber-400">Skills</span>
        </h3>
      </div>
      <div className="py-4 grid grid-cols-2 gap-4 gap-y-11  md:grid-cols-4 lg-cols-5">
        {Skills &&
          Skills?.map((item, index) => {
            return (
              <div
                className={`${item?.hover} ${item?.color} text-4xl hover:text-white w-16 h-16  rounded-full flex  justify-self-center justify-center items-center  duration-300 hover:scale-[2] bg-slate-700`}
                key={index}
              >
                <i className={`${item.logo}   `}></i>
              </div>
            );
          })}
      </div>
    </section>

    // <div>
    //   {skills.map((skill, index) => {
    //     return (
    //       <div className="flex justify-center" key={index}>
    //         <i className={`${skill.logo} text-lg `}></i>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Skills;
