
import Logo from "../assets/logo-text.png"
const Navbar = () => {
    return (
        <div className="flex justify-between container mx-auto items-center my-4">
             <img src={Logo} alt="A logo of DevStack" className=""/>
           <ul className="flex gap-5 items-center ">
            <li className="text-[#db2777] font-semibold">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
           <div className="flex gap-6">
            <button>Sign In</button>
            <button className="btn btn-active btn-secondary rounded-4xl">Sign Up</button>
           </div>
        </div>
    );
};

export default Navbar;