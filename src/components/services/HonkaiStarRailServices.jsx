import React from 'react'
import ServicesCards from './ServicesCards'
import PageTitle from '../PageTitle'

import services from './../../data/services/hsr/hsr_services.json'

// Services Modals | Honkai: Star Rail
import Modal1 from './modals/Modal1'
import Modal2 from './modals/Modal2'
import Modal3 from './modals/Modal3'

function HonkaiStarRailServices(props) {

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
        <div className='max-w-screen flex flex-col items-center mb-20 text-black m-0' id='hsr_services'>
            <PageTitle title="HONKAI: STAR RAIL" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

            <Modal1 id='hsr_account_maintenance' name='Account Maintenance' jsonData='src/data/services/hsr/account_maintenance.json' />
            <Modal1 id='old_events' name='Old Events' jsonData='src/data/services/hsr/old_events.json' />
            <Modal2 id='open_world' name='Open World' jsonData='src/data/services/hsr/open_world.json'/>
            <Modal3 id="missions" name="Missions" jsonData='src/data/services/hsr/missions.json'/>
            <Modal3 id="miscellaneous" name="Miscellaneous" jsonData='src/data/services/hsr/miscellaneous.json'/>

            <div className='carousel carousel-center max-w-sm p-4 space-x-4 md:hidden'>
                {servicesCards}
            </div>

            <div className='hidden md:flex justify-center'>
                <div className='flex flex-row flex-wrap items-center w-10/12 py-4 justify-center'>
                    {servicesCardsLarge}
                </div>
            </div>
        </div>
    );
}

export default HonkaiStarRailServices;