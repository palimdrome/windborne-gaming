import React from 'react'
import background from '../assets/img/contact.png';

function Contact (props) {
    return (
        <section className='min-h-fit lg:max-w-full flex flex-wrap lg:flex-col md:flex-col justify-start lg:justify-center md:justify-center lg:items-center gap-y-5 lg:gap-y-10 px-10 p-32 left-7 bg-right bg-no-repeat bg-cover' style={{backgroundImage: `url(${background})`}} id='contact'>

            <h1 className="w-full lg:w-2/4 md:w-2/4 text-5xl text-left lg:text-center font-bold">Interested? Send us a message.</h1>
            <p className="max-w-lg text-lg text-left lg:text-center md:text-center p-1">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
            <a href="https://www.facebook.com/windbornegaming"><button className="btn btn-outline btn-primary border-2 active:bg-primary active:text-white active:border-none  uppercase text-xl font-bold py-2 px-8 mt-5">message us</button></a>
        </section>
    );
}

export default Contact;