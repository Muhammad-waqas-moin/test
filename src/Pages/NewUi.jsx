import React from 'react';

const NewUi = () => {
  const values = [
    {
      num: 190.4,
      per: ' 0.00 (0.00%)',
    },
    {
      num: 189.93,
      per: 'Bid',
    },
    {
      num: 180.8,
      per: 'Ask',
    },
    {
      num: '2x6',
      per: 'size',
    },
    {
      num: 234632,
      per: 'Volume',
    },
  ];
  const cashobt = [
    {
      value: '$ 70.90',
      decs: 'Cash Available for inverstment',
    },
    {
      value: '$ 70.90',
      decs: 'Cash Available for inverstment',
    },
  ];

  const actionObj = [
    {
      title: 'Active',
      icon: true,
    },
    {
      title: 'Quantity',
      icon: false,
    },
    {
      title: 'order Type',
      icon: true,
    },
    {
      title: 'Duration',
      icon: true,
    },
  ];
  return (
    <div>
      <div className="bg-[#1f2334] px-10 py-10">
        <div className="flex justify-between md:justify-between w-full md:px-8 ">
          <p className="text-white text-3xl  md:text-4xl">QuickTrade</p>
          <div>
            <i className="fa-sharp fa-solid fa-x text-2xl text-blue-400"></i>
          </div>
        </div>
        <div className="flex py-4">
          <input className="w-[95%]" type="text" />
          <button className="px-8 py-4 ml-1 bg-blue-400 rounded" type="submit">
            <i className="fa-solid fa-arrow-right text-black "></i>
          </button>
        </div>
        <div className="flex items-center text-blue-400  ">
          <i class="fa-regular fa-circle-play  px-4 text-4xl"></i>
          <div>
            <p className="text-sm md:text-3xl">
              view QuickTrade for Help video
            </p>
          </div>
        </div>
        <div className="flex  px-4 mt-6 gap-4 text-lg md:text-3xl text-blue-400">
          <button className=" hover:border-t-2 border-[#B381F6] hover:text-[#B381F6]">
            QUOTE
          </button>
          <button className="hover:border-t-2 border-[#B381F6] hover:text-[#B381F6] ">
            TTRADE TICKET
          </button>
        </div>
      </div>

      <div className="bg-black text-white px-10 py-10 text-xs sm:text-xs md:text-2xl">
        <div>
          <p>APPLE INC.</p>
        </div>
        <div className="flex justify-between">
          {values &&
            values.map((item, value) => {
              return (
                <div>
                  <h1>{item?.num}</h1>
                  <p>{item?.per}</p>
                </div>
              );
            })}
        </div>
        <div className="flex  justify-center gap-2 tex-lg items-center  py-8 md:text-2xl ">
          <p className="">Real Time Quote as of 11/29/20223 1:53 ET</p>{' '}
          <i className="fa-solid fa-rotate-reverse text-blue-400 "></i>
        </div>
      </div>

      <div className=" bg-gray-500 ">
        <div className="flex bg-gray-500  px-10 py-10">
          <input className="w-[95%]" type="text" />
          <button className="px-8 py-4 ml-1 bg-blue-400 rounded" type="submit">
            <i class="fa-duotone fa-arrow-down-to-line  text-black"></i>
          </button>
        </div>
        <div className="flex flex-wrap  gap-4  md:justify-between  w-full px-8 pb-10 text-white">
          {cashobt &&
            cashobt.map((item, index) => {
              return (
                <div>
                  <h1>{item?.value}</h1>
                  <p>{item?.decs}</p>
                </div>
              );
            })}
        </div>
        <div className="flex  px-4 mt-6 gap-4 text-lg md:text-3xl text-blue-400">
          <button className=" hover:border-t-2 border-[#B381F6] hover:text-[#B381F6]">
            STOCK
          </button>
          <button className="hover:border-t-2 border-[#B381F6] hover:text-[#B381F6] ">
            OPTION
          </button>
        </div>
        <div className="flex flex-col justify-center p-6 w-[95%]">
          {actionObj &&
            actionObj.map((item, index) => {
              return (
                <div className=" flex items-center justify-between">
                  <p>{item?.title}</p>
                  {item?.icon ? (
                    <div className="flex py-4">
                      <input
                        className={`  w-[66rem] h-12
                        }  type="text`}
                      />
                      <button
                        className="px-8 h-12 ml-1 bg-blue-400 rounded"
                        type="submit"
                      >
                        {/* <i className="fa-solid fa-arrow-right text-black "></i> */}
                        <i className="fa-solid fa-angle-down text-black "></i>
                      </button>
                    </div>
                  ) : (
                    <div className="flex py-4">
                      <input className="w-[71rem] h-12" type="text" />
                    </div>
                  )}
                </div>
              );
            })}
        </div>{' '}
      </div>
    </div>
  );
};

export default NewUi;
