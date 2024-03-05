import React from 'react'
import GenshinServicesCards from './GenshinServicesCards'
import services from './../../data/services/genshin_services.json'

function GenshinServices(props) {

    console.log(services)

    const servicesCards = services.map(service =>
            <GenshinServicesCards service={service}/> 
        )

    return (
        <div className='max-w-screen min-h-screen text-black m-0'>
            <h2 className='text-3xl lg:text-5xl font-bold my-5 lg:my-10 lg:py-5'>GENSHIN IMPACT</h2>

            <p className='m-2 text-sm lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="carousel carousel-center max-w-sm p-4 space-x-4 lg:hidden">
                {servicesCards}
            </div>
        </div>
    );
}

export default GenshinServices;