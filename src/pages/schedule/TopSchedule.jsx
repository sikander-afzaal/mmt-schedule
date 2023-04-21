import { useState } from "react";
import DropDown from "../../components/Dropdown";

const TopSchedule = () => {
  const [dropValues, setDropValues] = useState({
    stdName: "Please Select",
    term: "Please Select",
    subject: "Please Select",
  });
  const Names = ["Please Select", "Lorem", "Lorem", "Lorem"];
  const Terms = ["Please Select", "Lorem", "Lorem", "Lorem"];
  const Subjects = ["Please Select", "Lorem", "Lorem", "Lorem"];
  const handler = (name, value) => {
    setDropValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex w-[90%] max-w-[1600px] justify-start items-center md:items-start flex-col gap-7">
      <h2 className="text-darkBlue font-inter font-bold text-3xl md:mb-3  md:text-[48px]">
        MMT Schedule
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full gap-4 xl:gap-10 max-w-[1220px]">
        <DropDown
          handler={handler}
          options={Names}
          value={dropValues.stdName}
          name="stdName"
          label="Student Name"
        />
        <DropDown
          handler={handler}
          options={Terms}
          value={dropValues.term}
          name="term"
          label="Select Term"
        />
        <DropDown
          handler={handler}
          options={Subjects}
          value={dropValues.subject}
          name="subject"
          label="Subject"
        />
      </div>
    </div>
  );
};

export default TopSchedule;
