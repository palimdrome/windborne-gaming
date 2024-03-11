import React from 'react';


function ServicesCards({service}) {
    
    const img = service.img_url
    const modal_id = service.id

    return (

        <div    className="card w-64 h-64 text-white shadow-md hover:shadow-xl hover:shadow-stone-900/50 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300" 
                style={{
                    backgroundImage: "url(" + img + ")", 
                    backgroundSize: "cover",
                    position: "relative"}}
                    
                onClick={()=> {document.getElementById(modal_id + '_modal').showModal()}}

                    >

            <div className="card-body bg-slate-900/60 transition ease-in-out delay-50 duration-300 hover:bg-transparent rounded-2xl justify-end">

                {service.service_type === "Time-Limited Event" ? <p className='text-slate-200 text-left text-sm'>{service.service_type}</p> :<div></div>}

                <h2 className="card-title text-left text-md hover:drop-shadow-xl">{service.title}</h2>

                <div className="card-actions text-end justify-end">
                    {service.service_type === "Time-Limited Event" ? <p className='text-slate-200 text-left text-xs'>until {service.duration} only</p> :<div></div>}
                </div>
            </div>
        </div>
    );
}

export default ServicesCards;