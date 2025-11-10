const Input = ({ label, type, placeholder, width = "100%" }) => {
  return (
    <div className="flex flex-col" style={{width: width}}>
                <label
                    className="text-lg text-white"
                >
                    {label}
                </label>
                <input 
                    className="bg-gray-300 rounded-sm text-sm text-black px-2 py-[3px]"
                    type={type}
                    placeholder={placeholder}
                    required
                />
            </div>
  );
};

export default Input;
