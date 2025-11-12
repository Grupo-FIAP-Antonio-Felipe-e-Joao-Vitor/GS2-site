const TextArea = ({ label, type, placeholder, register, name, width="w-full" }) => {
    return (
        <div className={`flex flex-col mb-10 ${width}`}>
            <label
                className="text-lg font-bold text-white mb-2 uppercase"
            >
                {label}
            </label>
            <textarea
                className="bg-slate-700 rounded-sm text-lg text-white px-2 py-[3px] h-50"
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