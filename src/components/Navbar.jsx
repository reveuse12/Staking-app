import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white p-4 rounded-lg hover:shadow-lg ">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" flex items-center text-2xl">
          <h1 className="text-4xl font-semibold capitalize text-pink-500">
            <span className="underline decoration-sky-500">Crypto</span> App
          </h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="group text-slate-600  transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom font-medium bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </p>
          </Link>
          <Link
            to="About"
            className="group  text-slate-600 font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </p>
          </Link>
          <Link
            to="/StakingApp"
            className="group  text-slate-600 font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Staking App
            </p>
          </Link>
          <Link
            to="/GetToken"
            className="group  text-slate-600 font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Get Tokens
            </p>
          </Link>
          <Link
            to="Contact"
            className="group  text-slate-600 font-medium transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom  bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact
            </p>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-slate-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-slate-600 hover:text-blue-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="About"
              className="text-slate-600 hover:text-blue-300 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/stakingapp"
              className="text-slate-600 hover:text-blue-300 transition duration-300"
            >
              Staking App
            </Link>
            <Link
              to="/gettoken"
              className="text-slate-600 hover:text-blue-300 transition duration-300"
            >
              Get Tokens
            </Link>
            <Link
              to="Contact"
              className="text-slate-600   hover:text-blue-300 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
