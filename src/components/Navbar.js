import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'


export const Navbar = function() {

    const [hamburger, setHamburger] = React.useState(false)


    // array for navbar links
    const navbarLinks = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]


    return (
        <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Ishan</h1>
            </div>

            {/* this only shows up for desktop version */}
            <ul className='hidden md:flex'>
                {navbarLinks.map(element => {
                    return (
                        <li
                        key={element.id}
                        className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
                        >
                            <Link to={element.link} smooth duration={500}>{element.link}</Link>
                        </li>
                    )
                })}
            </ul>

            {/* hamburger menu for mobile */}
            <div 
            onClick={() => setHamburger(prev => !prev)}
            className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {hamburger ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
            
            {/* this is the pop down menu */}
            {hamburger && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {navbarLinks.map(element => {
                        return (
                        <li
                            key={element.id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500"
                        >
                            <Link
                            onClick={() => setHamburger(prev => !prev)}
                            to={element.link}
                            smooth duration={500}
                            >
                                {element.link}
                            </Link>
                        </li>
                        )
                    })}
                </ul>
            )}
            
        </div>
    )
}

