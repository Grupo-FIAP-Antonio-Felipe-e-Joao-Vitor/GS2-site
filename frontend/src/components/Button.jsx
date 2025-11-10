const Button = ({ label, type }) => {
  return (
    <button
        className="px-5 py-1 w-full bg-slate-600 uppercase text-2xl rounded-lg cursor-pointer text-white hover:bg-slate-700 transition-all duration-300"
        type={type}
    >
        { label }
    </button>
  )
}

export default Button