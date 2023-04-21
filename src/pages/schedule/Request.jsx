const Request = () => {
  return (
    <div className="flex mt-14 md:mt-[80px] w-[90%] max-w-[1600px] justify-start items-center md:items-start flex-col gap-7">
      <h2 className="text-darkBlue font-inter font-bold text-3xl md:mb-3  md:text-[48px]">
        Special Request
      </h2>
      <textarea className="w-full text-base md:text-lg py-5 px-5 resize-none outline-none h-[240px] md:h-[385px] border-black border border-solid rounded-xl md:rounded-3xl bg-white"></textarea>
      <button className="bg-darkBlue md:self-end w-[172px] h-[56px] rounded-lg border-darkBlue border-2 border-solid hover:bg-transparent hover:text-darkBlue text-white transition-all duration-300">
        Confirm
      </button>
    </div>
  );
};

export default Request;
