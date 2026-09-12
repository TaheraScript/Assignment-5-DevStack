
import Logo from "../assets/logo-text.png"
const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-white shadow-sm flex items-center">
        <div className="flex justify-between container mx-auto items-center my-4 ">
             <img src={Logo} alt="A logo of DevStack" />
           <ul className="flex gap-6 items-center ">
            <li><a href="#" className="text-[#db2777] font-semibold">Home</a> </li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
           </ul>
           <div className="flex gap-6 items-center">
            <button className="btn btn-link no-underline text-gray-700 font-medium">Sign In</button>
            <button className="btn btn-active btn-secondary rounded-4xl">Sign Up</button>
           </div>
        </div>
        </div>
    );
};

export default Navbar;