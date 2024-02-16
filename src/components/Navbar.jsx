import React from 'react';

function Navbar(props) {
    return (
        <div>
            <div className="navbar bg-blue-1 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-48">
                            <li><a className='text-gray-950'>Genshin</a></li>
                            <li><a className='text-gray-950'>HSR</a></li>
                            <li><a className='text-gray-950'>About</a></li>
                            <li><a className='text-gray-950'>Team</a></li>
                            <li><a className='text-gray-950'>Contact</a></li>
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-xl hover:text-cyan-800">Windborne Gaming</a>
                </div>
                
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><a className='text-white hover:text-cyan-800'>Genshin</a></li>
                        <li><a className='text-white hover:text-cyan-800'>HSR</a></li>
                        <li><a className='text-white hover:text-cyan-800'>About</a></li>
                        <li><a className='text-white hover:text-cyan-800'>Team</a></li>
                        <li><a className='text-white hover:text-cyan-800'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;