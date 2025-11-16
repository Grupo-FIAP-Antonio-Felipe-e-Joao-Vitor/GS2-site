const Modal = ({ children, width = "w-[95%]", height = "h-[90%]" }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className={`relative w-[95%] max-w-5xl h-[90%] bg-white rounded-2xl shadow-xl overflow-hidden ${width} ${height}`}>
                
                {children}

            </div>
        </div>
  )
}

export default Modal