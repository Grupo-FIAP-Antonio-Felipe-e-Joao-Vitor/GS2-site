const Input = ({ label, type, placeholder, register, name, width = "w-full" }) => {
  return (
    <div className={`flex flex-col mb-5 ${width}`}>
                <label
                    className="text-2xl font-bold text-white"
                >
                    {label}
                </label>
                <input 
                    className="bg-gray-300 rounded-sm text-lg text-black px-2 py-[3px]"
                    type={type}
                    placeholder={placeholder}
                    {...(register ? register(name) : {})}
                    required
                />
            </div>
  );
};

export default Input;
