const Dropdown = ({ value, label, name, options, handler }) => {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-2">
      <label className="text-[#666] text-xs font-semibold" htmlFor={label}>
        {label}
      </label>
      <select
        onChange={handler}
        value={value}
        className="w-full outline-none h-[50px] border-2 border-solid border-mercury focus:border-darkBlue transition-all rounded-lg px-4 text-[#333] text-sm font-normal"
        name={name}
        id={label}
      >
        {options.map((elem, idx) => {
          return (
            <option className="text-black" key={elem + idx} value={elem}>
              {elem}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
