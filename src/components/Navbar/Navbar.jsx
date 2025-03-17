import React, { useState } from 'react';
import { TbCircleKey } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='max-w-[1440px] mx-auto bg-[#9C29B2] text-white p-5'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <div className='md:h-[145px] md:w-[218px] h-[150px] w-[250px]'>
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/681a/dbbe/35b48f53c328d9887d990363ae1f083f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sdC1IqzTNk855VY7FvHIBN8SxAfwX7oWN~BQ2zg~Xa5tAVn7~FwVZjJP-DYjM~OM4UKIrCmuIJf-3pOoUT0jDwNMrQhq-K-XqCM~DCaSMO3sRf3VegkxyeWYOjvQ0qYYEVVRPz5b1xwe-cO36jZXa1z2NclDEMaUZYkRk-Fw6vhgK4rgmZXXzJQ83sbiHUumghfx5RSJ28A5-SieCAvubb8szR6eNry9hLcPY8OWHcGEidQaFUjBAEL2-~7S2fv3c3Se0QPKCsxo3MPm1YD6S-3ocZQhDOXyY7zzOVKQcSNVdNftq0VAAl7c7SQlly65jsAsuOAhA-DgwUh~rvA8YA__" 
                        alt="Logo" 
                        className='w-full h-full object-contain' 
                    />
                </div>
                
                {/* Desktop Menu */}
                <ul className='hidden md:flex font-thin gap-10 justify-center items-center'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Write</li>
                    <li>Read</li>
                    <li>Pricing</li>
                    <Link to="/dashboard">
                    <li className='font-bold'>Dashboard</li>
                    </Link>
                </ul>
                
                {/* Language and Sign-in Button */}
                <div className='hidden md:flex text-black justify-center items-center gap-2'>
                    <div className='border bg-[#9C29B2] flex justify-center items-center px-2 py-1 rounded-[3px] border-[#FFC909]'>
                        <select className='bg-[#9C29B2] text-[12px] text-white outline-none'>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                    <button className='bg-[#FFC909] px-2 py-1 rounded-[3px] text-[12px] flex items-center'>
                        Sign in <TbCircleKey className='ml-1 text-[14px]' />
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className='md:hidden text-white text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className='md:hidden mt-4 space-y-4 text-center'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Write</li>
                    <li>Read</li>
                    <li>Pricing</li>
                    <Link to="/dashboard">
                    <li className='font-bold'>Dashboard</li>
                    </Link>
                    <li className='flex justify-center items-center gap-2'>
                        <select className='bg-[#9C29B2] text-white text-[12px] outline-none'>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                        <button className='bg-[#FFC909] px-2 py-1 rounded-[3px] text-[12px] flex items-center'>
                            Sign in <TbCircleKey className='ml-1 text-[14px]' />
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
