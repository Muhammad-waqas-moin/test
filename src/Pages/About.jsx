import React from 'react';

const About = ({ desc, info }) => {
  // const info = [
  //   { text: 'Years Experience', count: '04' },
  //   { text: 'Completed Projects', count: '23' },
  //   { text: 'Companies Work', count: '06' },
  // ];

  return (
    <section id="#about" className="text-white py-10">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          About<span className="text-amber-400">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg"></p>
        <p>
          {desc}
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          itaque reiciendis esse assumenda blanditiis fuga accusantium,
          architecto dolorem, quisquam repellendus a ratione facere minus, earum
          ducimus deserunt nemo recusandae cum. */}
        </p>
      </div>
      <div className="flex justify-center items-center py-5 gap-8">
        {info.map((content, index) => {
          return (
            <div className="flex" key={index}>
              <div className="">
                <h3 className="text-center text-2xl md:text-4xl font-semibold text-white">
                  {content.count}
                </h3>
                <span className="text-cyan-600 text-xs md:text-base">
                  {content.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
