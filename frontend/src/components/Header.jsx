import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useState } from "react";
import Profile from "./Profile";

const Header = ({ user, setUser }) => {

  const [openProfile, setOpenProfile] = useState(false)

  return (
    <header className="w-full p-2 text-white bg-slate-800">
      <nav className="flex justify-around items-center">
        <Link to="/" className="uppercase text-lg">Home</Link>

        <ul className="flex space-x-8 items-center">
          <li className="list-none uppercase text-lg">
            <Link to="/HealthForm">Health form</Link>
          </li>
          <li className="list-none uppercase text-lg relative">
            {!user && (
              <Link
                className="text-white px-5 border-2 border-white rounded-lg bg-transparent cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                to="/login"
              >
                Login
              </Link>
            )}

            {user && (
              <Avatar 
                user={user}
                openProfile={openProfile}
                setOpenProfile={setOpenProfile}
              />
            )}

            {user && openProfile ? (
            <Profile
              user={user}
              setUser={setUser}
            />
          ) : (null)}
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
