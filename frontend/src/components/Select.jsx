const Select = ({ label, options, placeholder, register, name, width = "w-full" }) => {
    return (
        <div className={`flex flex-col mb-5 ${width}`}>
            <label
                className="text-lg font-bold text-white"
            >
                {label}
            </label>
            <select
                className="bg-gray-300 rounded-sm text-lg cursor-pointer text-black px-2 py-[3px]"
                defaultValue=""
                {...(register ? register(name, { required: true }) : {})}
            >
                <option value="" disabled hidden>
                    {placeholder}
                </option>
                {options.map((o) => (
                    <option value={o.value}>{o.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Select