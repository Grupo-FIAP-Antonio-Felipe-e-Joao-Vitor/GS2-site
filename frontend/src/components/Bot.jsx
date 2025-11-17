import { useRef, useEffect } from "react";

const Bot = ({ avatar, setOpenBot, openBot, iframe }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (openBot && panelRef.current && !panelRef.current.contains(e.target)) {
        setOpenBot(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openBot]);

  return (
    <div className="fixed bottom-0 right-0 flex items-end justify-end w-full z-100">

      <img
        src={avatar}
        className="w-15 h-15 md:w-20 md:h-20 mb-5 mr-5 rounded-full border cursor-pointer bg-white object-cover border-white"
        alt="avatar"
        onClick={() => setOpenBot(!openBot)}
      />

      <div
        ref={panelRef}
        className={`relative bg-white h-screen shadow-xl rounded-t-xl overflow-hidden 
        transition-all duration-500 
        ${openBot ? "block translate-x-0 w-[80%] md:w-[30%]" : "translate-x-full w-0 hidden"}`}
      >

        <button
          className="absolute top-3 right-3 text-2xl font-bold cursor-pointer text-gray-600 hover:text-black"
          onClick={() => setOpenBot(false)}
        >
          ×
        </button>

        {iframe}

      </div>
    </div>
  );
};

export default Bot;
