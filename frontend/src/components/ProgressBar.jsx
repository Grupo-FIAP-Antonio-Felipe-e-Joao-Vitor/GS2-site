const ProgressBar = ({ label,  minLabel, maxLabel, register, name, width = "w-full" }) => {
  return (
    <div
      className={`flex flex-col gap-3 ${width} mb-10 transition-all`}
    >
      <span className="text-lg text-white font-semibold mb-2 tracking-wide uppercase">
        {label}
      </span>

      <div className="w-full flex flex-col">
        {/* Labels laterais */}
        <div className="flex justify-between text-sm text-slate-300">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>

        {/* Slider estilizado */}
        <div className="relative w-full">
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            {...(register ? register(name) : {})}
            className="w-full cursor-pointer bg-white h-2 rounded-lg outline-none accent-blue-500 transition-all duration-300"
          />

          {/* Bolinhas de marcação (1 a 5) */}
          <div className="flex justify-between mt-2 absolute top-5 left-0 right-0">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className="text-xs text-slate-400 font-semibold select-none"
              >
                {num}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-5 border-t-2 border-slate-600 mt-10"></div>

    </div>
  );
};

export default ProgressBar;
