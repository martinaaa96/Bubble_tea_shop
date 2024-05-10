import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiX} from 'react-icons/hi';
import { RiMenu3Fill } from 'react-icons/ri';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const handleNav = () => {
        setOpen(!open);
    };

    return (
        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 font-serif">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                <img
                    src="/logo.png"
                    alt="logo"
                    className="my-7 md:my-0 cursor-pointer hover:scale-110 duration-500"
                    style={{ width: "100px", display: open ? 'none' : 'block' }}
                />
            </a>
            <nav className="hidden md:flex">
                <Link to="/" className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">Home</Link>
                <Link to="/about" className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">About</Link>
                <Link to="/menu" className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">Menu</Link>

                <Link to="/special" className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">Featured products</Link>

            </nav>
            <div onClick={handleNav} className="md:hidden z-10">
                {open ? <HiX size={20} /> : <RiMenu3Fill size={20} />}
            </div>
            <div
                onClick={handleNav}
                className={open ? "absolute left-0 top-0 w-full bg-white px-4 py-7 flex flex-col" : "absolute left-[-100%]"}
            >
                <ul>
                    <li>
                        <Link to="/" className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">About</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">Menu</Link>
                    </li>
                    <li>
                        <Link to="/special" className="text-black hover:text-purple-700 duration-500 md:mx-4 md:my-2">Featured products</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};