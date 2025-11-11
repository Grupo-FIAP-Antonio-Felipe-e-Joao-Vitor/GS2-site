const TextArea = ({ label, type, placeholder, register, name, width="w-full" }) => {
    return (
        <div className={`flex flex-col mb-5 ${width}`}>
            <label
                className="text-lg font-bold text-white uppercase"
            >
                {label}
            </label>
            <textarea
                className="bg-gray-300 rounded-sm text-lg text-black px-2 py-[3px] h-50"
                type={type}
                placeholder={placeholder}
                {...(register ? register(name) : {})}
                required
                >
            </textarea>
        </div>
    );
}

export default TextArea