import React from 'react'
import logo from '../assets/img/windborne-logo-white.png';

function Footer (props) {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-blue-500 min-h-fit flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-y-3 lg:gap-y-10 p-8 lg:p-4 lg:px-20">
            <a href="#" className='flex items-center ml-4 '>
                <img src={logo} className='h-10 py-2' alt="logo"/>
                <p className="btn btn-ghost text-xl">Windborne Gaming</p>
            </a>
            <a href="https://docs.google.com/document/d/15bhyBXiFdQd4CXQp-uhVVJwRWIR28T09x63SJE9OBKY/edit?usp=sharing">Privacy Policy</a>
            <a href="https://docs.google.com/document/d/15bhyBXiFdQd4CXQp-uhVVJwRWIR28T09x63SJE9OBKY/edit?usp=sharing">Terms & Conditions</a>
            <div>Copyright &copy; Windborne Gaming {year}</div>
        </footer>
    )
};

export default Footer;