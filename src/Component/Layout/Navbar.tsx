import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo-text.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 
   return (
    <div className="sticky top-0 z-50 bg-white shadow-sm flex ">
     <div className="grid grid-cols-3 md:flex md:justify-between items-center w-full max-w-7xl mx-auto my-4 px-4">
        <button
          className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        <img src={Logo} alt="A logo of DevStack" className="h-8 w-auto" />
        <ul className="hidden md:flex gap-6 items-center"> 
          <li><a href="#" className="text-[#db2777] font-semibold">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="flex gap-2 md:gap-6 items-center justify-self-end md:justify-self-auto"> 
          <button className="btn btn-link btn-sm md:btn-md no-underline text-gray-700 font-medium">Sign In</button>
          <button className="btn btn-sm md:btn-md btn-active btn-secondary rounded-4xl">Sign Up</button>
        </div>
      </div>

      {menuOpen && ( 
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <li><a href="#" className="text-[#db2777] font-semibold">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;