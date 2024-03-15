import React from 'react'
import ServicesCards from './ServicesCards'
import PageTitle from '../PageTitle'

import services from '../../../public/data/services/hsr/hsr_services.json'

// Services Modals | Honkai: Star Rail
import Modal1 from './modals/Modal1'
import Modal2 from './modals/Modal2'
import Modal3 from './modals/Modal3'
import Modal4 from './modals/Modal4'

function HonkaiStarRailServices(props) {

    let accountMaintenanceNote = 
    "*Doesn't include Simulated Universe.\n**Doesn't include all tasks. Completing other tasks (e.g., 'Clear Cavern of Corrosion 8 times') is subject to the client's preferences in burning their TBP";

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

    const timeLimitedEvents = services.map((service) =>
        (service.service_type === "Time-Limited Event" ?
            <Modal4 id={service.id} name={service.title} pub_url={service.pub_url} />
            :
            <div className='hidden'></div>
        ) 
    )

    console.log(servicesCards)

    return (
        <div className='max-w-screen flex flex-col items-center mb-20 pt-20 text-black m-0' id='hsr_services'>
            <PageTitle title="HONKAI: STAR RAIL" subtitle="Embark on an epic journey through the stars with our tailored piloting services for Honkai Star Rail. Explore the depths of space and conquer challenges with ease." />

            <Modal1 id='hsr_account_maintenance' name='Account Maintenance' jsonData='./data/services/hsr/account_maintenance.json' note={accountMaintenanceNote} />
            <Modal1 id='old_events' name='Old Events' jsonData='./data/services/hsr/old_events.json' />
            <Modal2 id='open_world' name='Open World' jsonData='./data/services/hsr/open_world.json'/>
            <Modal3 id="missions" name="Missions" jsonData='./data/services/hsr/missions.json'/>
            <Modal3 id="miscellaneous" name="Miscellaneous" jsonData='./data/services/hsr/miscellaneous.json'/>

            {timeLimitedEvents}

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