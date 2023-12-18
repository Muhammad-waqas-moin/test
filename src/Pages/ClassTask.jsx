import React from 'react';
import logo from '../assets/epsnlogo.png';
import pakIcon from '../assets/pakistan.png';
import indiaIcon from '../assets/india.png';

const ClassTask = () => {
  const detailObj = [
    {
      MatchList: [
        {
          data: [
            {
              item: 'BN V NZ',
              value: 1,
            },
            {
              item: 'Sheffiled sheild',
              value: 3,
            },
            {
              item: 'Legands league',
              value: 1,
            },
            {
              item: 'Abu Dhabi T20',
              value: 3,
            },
          ],
        },
      ],
      tableData: [
        {
          data: [
            {
              countryOne: 'PAK',
              countryTwo: 'IND',
              countryOneIcon: pakIcon,
              countryTwoIcon: indiaIcon,
              over: 46.2,
              countryOneScore: 135,
              countryOnePriveusScore: 310,
              countryOneOut: 3,
              countryTwoScore: 315,
              day: 3,
              session: 2,
              text: function () {
                return `Pakistan lead by ${
                  this.countryOnePriveusScore +
                  this.countryOneScore -
                  this.countryTwoScore
                } runs.`;
              },
              extraDetail: ['Schedule', 'Report', 'Series'],
            },
            {
              countryOne: 'PAK',
              countryTwo: 'IND',
              countryOneIcon: pakIcon,
              countryTwoIcon: indiaIcon,
              over: 20,
              countryOneScore: 11,
              countryOnePriveusScore: 210,
              countryOneOut: 5,
              countryTwoScore: 289,
              day: 1,
              session: 1,
              text: function () {
                return `Pakistan lead by ${
                  this.countryOnePriveusScore +
                  this.countryOneScore -
                  this.countryTwoScore
                } runs.`;
              },
              extraDetail: ['Schedule', 'Report', 'Series'],
            },
            {
              countryOne: 'PAK',
              countryTwo: 'IND',
              countryOneIcon: pakIcon,
              countryTwoIcon: indiaIcon,
              over: 46.2,
              countryOneScore: 135,
              countryOnePriveusScore: 310,
              countryOneOut: 3,
              countryTwoScore: 315,
              day: 3,
              session: 2,
              text: function () {
                return `Pakistan lead by ${
                  this.countryOnePriveusScore +
                  this.countryOneScore -
                  this.countryTwoScore
                } runs.`;
              },
              extraDetail: ['Schedule', 'Report', 'Series'],
            },
            {
              countryOne: 'PAK',
              countryTwo: 'IND',
              countryOneIcon: pakIcon,
              countryTwoIcon: indiaIcon,
              over: 46.2,
              countryOneScore: 135,
              countryOnePriveusScore: 310,
              countryOneOut: 3,
              countryTwoScore: 315,
              day: 3,
              session: 2,
              text: function () {
                return `Pakistans lead by ${
                  this.countryOnePriveusScore +
                  this.countryOneScore -
                  this.countryTwoScore
                } runs.`;
              },
              extraDetail: ['Schedule', 'Report', 'Series'],
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#03a9f4] py-4 px-4 w-full flex justify-between">
        <div className="flex justify-center items-center gap-4">
          <i className="fa-sharp fa-solid fa-bars text-white text-3xl"></i>
          <img src={logo} />
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-white rounded-full py-1 px-3">use App</button>
          <i className="fa-sharp fa-solid fa-gear text-white text-3xl animate-spin "></i>
        </div>
      </div>
      <div className="w-full bg-blue-950  pt-12 pb-12 ">
        <div className="">
          <ul className="flex  items-center px-8 md:px-28 gap-2 md:gap-8 text-white">
            <li className="text-2xl md:text-4xl font-bold">Match(8)</li>
            {detailObj &&
              detailObj[0]?.MatchList[0]?.data.map((item, index) => {
                return (
                  <li
                    className=" text-sm  md:text-3xl  font-mono font-semibold tracking-tighter"
                    key={index}
                  >{`${item?.item}(${item?.value})`}</li>
                );
              })}
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-4  pt-5">
          {detailObj &&
            detailObj[0]?.tableData[0]?.data.map((item, index) => {
              return (
                <div key={index} className="bg-white p-5 rounded">
                  <div>
                    <p className="text-lg">
                      <span className="text-red-700 text-2xl">LIVE</span> 1st
                      TEST. sylhet.
                    </p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="flex gap-5 items-center text-3xl  font-bold">
                      <img src={item?.countryOneIcon} alt="pak" width={80} />
                      <p>{item?.countryOne}</p>
                    </div>
                    <div className="text-lg font-bold">
                      <p>{`(${item?.over} ov) ${item?.countryOnePriveusScore} & ${item?.countryOneScore}/${item?.countryOneOut}`}</p>
                    </div>
                  </div>
                  <div className="flex  items-center">
                    <div className="flex gap-5 items-center text-3xl  font-bold">
                      <img src={item?.countryTwoIcon} alt="ind" width={80} />
                      <p>{item?.countryTwo}</p>
                      <p className="">{item?.countryTwoScore}</p>
                    </div>
                  </div>

                  <div className="flex justify-start tracking-wide font-bold ">
                    <p>{`Day ${item?.day}-Session 2:${item?.text()}`}</p>
                  </div>
                  <hr></hr>
                  <div className="flex gap-5 py-1 font-bold">
                    {item?.extraDetail &&
                      item?.extraDetail.map((item, index) => {
                        return <h1>{item}</h1>;
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ClassTask;
