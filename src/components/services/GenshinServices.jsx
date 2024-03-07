import React from 'react'
import ServicesCards from './ServicesCards'
import PageTitle from '../PageTitle'

import services from './../../data/services/genshin_services.json'

function GenshinServices(props) {

    console.log(services)

    const servicesCards = services.map(service =>
            <div className="carousel-item">
                <ServicesCards service={service}/>
            </div>
             
        )
    const servicesCardsLarge = services.map(service =>
        <div className='m-4'>
            <ServicesCards service={service}/>
        </div>
            
    )

    console.log(servicesCards)

    return (
        <div className='max-w-screen mb-20 text-black m-0'>
            <div className='flex flex-col items-center'>
                <PageTitle title="GENSHIN IMPACT" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </div>
            

            <div className='carousel carousel-center max-w-sm p-4 space-x-4 md:hidden'>
                {servicesCards}
            </div>

            <div className='hidden md:flex justify-center'>
                <div className='flex flex-row flex-wrap items-center w-7/12 py-4 justify-items-center justify-center items-center'>
                    {servicesCardsLarge}
                </div>
            </div>
        </div>
    );
}

export default GenshinServices;