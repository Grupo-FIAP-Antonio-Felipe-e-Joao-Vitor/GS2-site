import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full p-2 text-white bg-slate-800">
      <nav className="flex justify-around">
        <Link to="/" className="uppercase text-lg">Home</Link>

        <ul className="flex space-x-8">
          <li className="list-none uppercase text-lg">
            <Link to="/form">Health form</Link>
          </li>
          <li className="list-none uppercase text-lg">
            <Link
                className="text-white px-5 border-2 border-white rounded-lg bg-transparent cursor-pointer hover:bg-white hover:text-black transition-all duration-300" 
                to="/login"
            >
                Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
