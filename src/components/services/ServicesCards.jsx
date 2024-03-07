import React from 'react';


function ServicesCards({service}) {
    
    const img = service.img_url

    return (

        <div    className="card w-64 h-64 text-white shadow-md" 
                style={{
                    backgroundImage: "url(" + img + ")", 
                    backgroundSize: "cover",
                    position: "relative"}}>

            <div className="card-body bg-slate-900/60 rounded-2xl justify-end">

                {service.service_type === "Time-Limited Event" ? <p className='text-slate-200 text-left text-sm'>{service.service_type}</p> :<div></div>}

                <h2 className="card-title text-lefttext-md">{service.title}</h2>

                <div className="card-actions text-end justify-end">
                    {service.service_type === "Time-Limited Event" ? <p className='text-slate-200 text-left text-xs'>until {service.duration} only</p> :<div></div>}
                </div>
            </div>
        </div>
    );
}

export default ServicesCards;