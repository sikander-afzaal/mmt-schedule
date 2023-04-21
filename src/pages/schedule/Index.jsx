import Request from "./Request";
import TimeSelector from "./TimeSelector";
import TopSchedule from "./TopSchedule";

const Schedule = () => {
  return (
    <div className="flex py-[40px] justify-start items-center flex-col w-full">
      <TopSchedule />
      <TimeSelector />
      <Request />
    </div>
  );
};

export default Schedule;
