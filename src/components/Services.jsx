import React from 'react';
import ServiceCard from './ServiceCard';

function Services(props) {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center gap-y-5 lg:gap-y-10 p-10 lg:p-20" id='services'>
            <div className='h-1/4 w-5/6 lg:w-3/4'>
                <h2 className="text-5xl font-bold text-black">SERVICES</h2>
                <p className="pt-5 text-black">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
            </div>
            <div className='flex flex-col lg:flex-row h-1/4 w-5/6 lg:w-3/4 gap-y-2 lg:gap-x-20'>
                <ServiceCard image={'src/assets/img/services/genshin-impact-service-bg.jpg'}/>
                <ServiceCard image={'src/assets/img/services/honkai-star-rail-service-bg.jpg'}/>
            </div>
        </section>
    );
}

export default Services;