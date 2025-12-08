import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "./Logo";
import Navmenu, { MobileNavmenu } from "./Navmenu";
import Profile from "./Profile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative top-0 left-0 z-50 p-6 px-8 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Logo />

        <Navmenu />
        <Profile />

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-100 focus:outline-none"
          >
            {isOpen ? (
              <HiOutlineX className="h-6 w-6" />
            ) : (
              <HiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg md:hidden">
          <MobileNavmenu isOpen={isOpen} />
          <Profile />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
