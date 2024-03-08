import React from 'react'
import logo from '../assets/img/windborne-logo-white.png';

function Footer (props) {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-blue-500 min-h-fit flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-y-3 lg:gap-y-10 p-8 lg:p-4 lg:px-20">
            <div className='flex items-center ml-4 '>
                <img src={logo} className='h-10 py-2' alt="logo"/>
                <a className="btn btn-ghost text-xl">Windborne Gaming</a>
            </div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <div>Copyright &copy; Windborne Gaming {year}</div>
        </footer>
    )
};

export default Footer;