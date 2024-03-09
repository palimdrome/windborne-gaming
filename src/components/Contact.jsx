import React from 'react'
import background from '../assets/img/contact-bg.jpg';

function Contact (props) {
    return (
        <section className='min-h-fit max-w-full flex flex-col lg:justify-center lg:items-center gap-y-5 lg:gap-y-10 px-10 p-32 left-7 bg-right bg-no-repeat bg-cover' style={{backgroundImage: `url(${background})`}} id='contact'>
            <h1 className="lg:w-1/3 text-5xl text-left lg:text-center font-bold">Interested? Send us a message.</h1>
            <p className="w-1/2 text-left lg:text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
            <button className="btn bg-primary border border-0 text-white uppercase lg:place-self-center lg:w-1/4">Message</button>
        </section>
    );
}

export default Contact;