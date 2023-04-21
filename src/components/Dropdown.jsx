import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const Dropdown = ({ value, label, name, options, handler }) => {
  const dropRef = useRef();
  const [toggleDrop, setToggleDrop] = useState(false);
  useOutsideClick(dropRef, () => setToggleDrop(false));
  return (
    <div className="w-full flex justify-start items-start flex-col gap-2">
      <label className="text-[#666] text-xs font-semibold" htmlFor={label}>
        {label}
      </label>
      <div ref={dropRef} className="relative w-full">
        <button
          onClick={() => setToggleDrop((prev) => !prev)}
          className={`flex justify-between items-center w-full outline-none h-[50px] border-2 border-solid border-mercury  focus:border-darkBlue transition-all ${
            toggleDrop ? "rounded-tl-lg rounded-tr-lg" : "rounded-lg"
          } px-4 text-[#333] text-sm font-normal`}
        >
          {value}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#002940"
            className={`w-5 h-5 ${toggleDrop ? "rotate-180" : "rotate-0"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {toggleDrop && (
          <div className="flex border border-t-0 border-solid border-mercury flex-col z-50 max-h-[400px] overflow-y-auto  justify-start items-start w-full rounded-bl-lg overflow-hidden rounded-br-lg absolute top-full left-0">
            {options.map((elem, idx) => {
              return (
                <button
                  onClick={() => {
                    setToggleDrop(false);
                    handler(name, elem);
                  }}
                  className={`bg-white border-solid border-mercury text-base text-[#666666] px-5 text-left hover:text-white hover:bg-darkBlue h-[50px] w-full transition-all duration-300 ${
                    idx === 0 ? "border-t-0" : "border-t"
                  }`}
                  key={elem + idx}
                >
                  {elem}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
