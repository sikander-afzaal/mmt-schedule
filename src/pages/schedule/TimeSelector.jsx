import React, { useState } from "react";

const TimeSelector = () => {
  const Times = [
    {
      title: "9:00",
      times: [
        "9:00 Mon",
        "9:00 Tue",
        "9:00 Wed",
        "9:00 Thur",
        "9:00 Fri",
        "9:00 Sat",
        "9:00 Sun",
      ],
    },
    {
      title: "10:00",
      times: [
        "10:00 Mon",
        "10:00 Tue",
        "10:00 Wed",
        "10:00 Thur",
        "10:00 Fri",
        "10:00 Sat",
        "10:00 Sun",
      ],
    },
    {
      title: "11:00",
      times: [
        "11:00 Mon",
        "11:00 Tue",
        "11:00 Wed",
        "11:00 Thur",
        "11:00 Fri",
        "11:00 Sat",
        "11:00 Sun",
      ],
    },
    {
      title: "12:00",
      times: [
        "12:00 Mon",
        "12:00 Tue",
        "12:00 Wed",
        "12:00 Thur",
        "12:00 Fri",
        "12:00 Sat",
        "12:00 Sun",
      ],
    },
    {
      title: "13:00",
      times: [
        "13:00 Mon",
        "13:00 Tue",
        "13:00 Wed",
        "13:00 Thur",
        "13:00 Fri",
        "13:00 Sat",
        "13:00 Sun",
      ],
    },
    {
      title: "14:00",
      times: [
        "14:00 Mon",
        "14:00 Tue",
        "14:00 Wed",
        "14:00 Thur",
        "14:00 Fri",
        "14:00 Sat",
        "14:00 Sun",
      ],
    },
    {
      title: "15:00",
      times: [
        "15:00 Mon",
        "15:00 Tue",
        "15:00 Wed",
        "15:00 Thur",
        "15:00 Fri",
        "15:00 Sat",
        "15:00 Sun",
      ],
    },
    {
      title: "16:00",
      times: [
        "16:00 Mon",
        "16:00 Tue",
        "16:00 Wed",
        "16:00 Thur",
        "16:00 Fri",
        "16:00 Sat",
        "16:00 Sun",
      ],
    },
    {
      title: "17:00",
      times: [
        "17:00 Mon",
        "17:00 Tue",
        "17:00 Wed",
        "17:00 Thur",
        "17:00 Fri",
        "17:00 Sat",
        "17:00 Sun",
      ],
    },
    {
      title: "18:00",
      times: [
        "18:00 Mon",
        "18:00 Tue",
        "18:00 Wed",
        "18:00 Thur",
        "18:00 Fri",
        "18:00 Sat",
        "18:00 Sun",
      ],
    },
    {
      title: "19:00",
      times: [
        "19:00 Mon",
        "19:00 Tue",
        "19:00 Wed",
        "19:00 Thur",
        "19:00 Fri",
        "19:00 Sat",
        "19:00 Sun",
      ],
    },
    {
      title: "20:00",
      times: [
        "20:00 Mon",
        "20:00 Tue",
        "20:00 Wed",
        "20:00 Thur",
        "20:00 Fri",
        "20:00 Sat",
        "20:00 Sun",
      ],
    },
    {
      title: "21:00",
      times: [
        "21:00 Mon",
        "21:00 Tue",
        "21:00 Wed",
        "21:00 Thur",
        "21:00 Fri",
        "21:00 Sat",
        "21:00 Sun",
      ],
    },
  ];
  const [selectedTime, setSelectedTime] = useState("");
  return (
    <div className="flex mt-14 md:mt-[80px] w-[90%] max-w-[1600px] justify-start items-center md:items-start flex-col gap-7">
      <h2 className="text-darkBlue font-inter font-bold text-3xl md:mb-3  md:text-[48px]">
        Day / Time
      </h2>
      <div className="flex justify-start items-center overflow-x-auto w-full max-w-[1120px] mx-auto">
        <div className="grid min-w-[900px] rounded bg-[#F5F5F6] grid-cols-8 w-full border-2 border-solid border-outer">
          <div className=""></div>
          <p className="text-heading text-sm font-bold font-inter border-b border-l border-solid border-mercury h-[30px] flex justify-start items-center px-1">
            Mon
          </p>
          <p className="text-heading text-sm font-bold font-inter border-b border-l border-solid border-mercury h-[30px] flex justify-start items-center px-1">
            Tue
          </p>
          <p className="text-heading text-sm font-bold font-inter border-b border-l border-solid border-mercury h-[30px] flex justify-start items-center px-1">
            Wed
          </p>
          <p className="text-heading text-sm font-bold font-inter border-b border-l border-solid border-mercury h-[30px] flex justify-start items-center px-1">
            Thur
          </p>
          <p className="text-heading text-sm font-bold font-inter border-b border-l border-solid border-mercury h-[30px] flex justify-start items-center px-1">
            Fri
          </p>
          <p className="text-heading text-sm font-bold font-inter border-b border-l border-solid border-mercury h-[30px] flex justify-start items-center px-1">
            Sat
          </p>
          <p className="text-heading text-sm font-bold font-inter border-b border-l border-solid border-mercury h-[30px] flex justify-start items-center px-1">
            Sun
          </p>
          {Times.map((elem, idx) => {
            return (
              <React.Fragment key={idx + elem.title}>
                <div className="grid border-t border-t-mercury grid-cols-1 grid-rows-2 w-full border-r border-r-mercury  border-solid h-[70px]">
                  <p className="h-full w-full flex justify-end  items-center px-2 text-heading font-bold text-sm font-inter border-b border-dashed border-[#D6D9DA]">
                    {elem.title}
                  </p>
                </div>
                {elem.times.map((elem, idx) => {
                  return (
                    <TimeBtn
                      key={idx + elem}
                      time={elem}
                      val={selectedTime}
                      setVal={setSelectedTime}
                    />
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;

const TimeBtn = ({ time, val, setVal }) => {
  return (
    <button
      onClick={() => setVal(time)}
      className="flex justify-center items-center w-full h-full border-b border-r border-solid border-mercury"
    >
      <div
        className={`flex justify-center items-center w-[75%] h-[75%] relative isolate  ${
          time === val ? "bg-innerActive" : "bg-inner"
        }  rounded-sm`}
      >
        <div
          className={`absolute -top-1 -right-1 -bottom-1 -left-2 ${
            time === val ? "bg-outerActive" : "bg-outer"
          } rounded -z-10`}
        ></div>
        <p
          className={`text-heading w-full h-full ${
            time === val ? "bg-innerActive" : "bg-inner"
          } grid place-items-center rounded-sm font-inter font-medium text-sm`}
        >
          {val === time ? "Selected" : "Select"}
        </p>
      </div>
    </button>
  );
};
