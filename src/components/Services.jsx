import React from 'react';
import ServiceCard from './ServiceCard';
import PageTitle from './PageTitle';

function Services(props) {
    let title = "services";
    let subtitle = "Elevate your gaming experience with our premium piloting services tailored to your needs.";

    let services = [
        ["Genshin Impact",
        "src/assets/img/services/genshin-impact-service-bg.jpg",
        "Unlock the full potential of your Genshin Impact adventure with our expert piloting services."],
        ["Honkai: Star Rail",
        "src/assets/img/services/honkai-star-rail-service-bg.jpg",
        "Navigate the cosmos of Honkai Star Rail with finesse and precision with our dedicated piloting assistance."]
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center items-center gap-y-10 lg:gap-y-10 p-10 lg:p-20 bg-neutral" id='services'>
            <PageTitle title={title} subtitle={subtitle} />
            <div className='flex flex-col lg:flex-row justify-center h-1/4 w-5/6 lg:w-3/4 gap-y-2 lg:gap-x-20'>
                <ServiceCard image={services[0][1]} service={services[0][0]} subtitle={services[0][2]} linkToSection="#genshin_services" />
                <ServiceCard image={services[1][1]} service={services[1][0]} subtitle={services[1][2]} linkToSection="#hsr_services" />
            </div>
        </section>
    );
}

export default Services;