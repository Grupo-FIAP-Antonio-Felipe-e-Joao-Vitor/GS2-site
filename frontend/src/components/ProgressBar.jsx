const ProgressBar = ({ label, minLabel, maxLabel, width = "w-full" }) => {

  return (
    <div className={`flex flex-col gap-1 border-b-2 border-slate-400 pb-5 ${width}`}>
      <span className="text-lg text-white text-left font-bold uppercase">{label}</span>

      <div className="w-full mt-1">
        <div className="flex justify-between w-full">
          <span className="text-sm text-white">{minLabel}</span>
          <span className="text-sm text-white">{maxLabel}</span>
        </div>

        <input
          type="range"
          min={1}
          max={5}
          step={1}
          className="accent-blue-500 cursor-pointer w-full"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
