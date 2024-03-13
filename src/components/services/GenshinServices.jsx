import React from 'react'
import ServicesCards from './ServicesCards'
import PageTitle from '../PageTitle'

import services from './../../data/services/genshin/genshin_services.json'

// Services Modals | Genshin Impact
import Modal1 from './modals/Modal1'
import Modal2 from './modals/Modal2'
import Modal3 from './modals/Modal3'

function GenshinServices(props) {

    let characterBuildingNote = "These prices are just estimates and may change depending on the character and existing materials. Message us directly so we can provide an exact computation of what materials your character needs.";

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
        <div className='max-w-screen flex flex-col items-center mb-20 pt-20 text-black m-0' id="genshin_services">
            <PageTitle title="GENSHIN IMPACT" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

            <Modal1 id='account_maintenance' name='Account Maintenance' jsonData='src/data/services/genshin/account_maintenance.json' />
            <Modal2 id='farming' name='Farming' jsonData='src/data/services/genshin/genshin_farming.json'/>
            <Modal3 id="archon_quests" name="Archon Quests" jsonData='src/data/services/genshin/archon_quests.json'/>
            <Modal3 id="world_quests" name="World Quests" jsonData='src/data/services/genshin/world_quests.json'/>
            <Modal3 id="special_items" name="Special Items" jsonData='src/data/services/genshin/special_items.json'/>
            <Modal3 id="character_building" name="Character Building" jsonData='src/data/services/genshin/character_building.json' note={characterBuildingNote} />
            <Modal3 id="other_quests" name="Other Quests" jsonData='src/data/services/genshin/other_quests.json' />


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

export default GenshinServices;