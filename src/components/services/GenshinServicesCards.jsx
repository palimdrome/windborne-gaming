import React from 'react';


function GenshinServicesCards({service}) {
    const img = service.img_url
    return (

        <div className="carousel-item">
            <div className="card image-full shadow-md">
                <figure><img src={img}/></figure>
                <div className="card-body justify-end">
                    <h2 className="card-title">{service.title}</h2>
                    <div className="card-actions text-end justify-end">
                        {service.duration != "N/A" ? <p>until {service.duration} only</p> :<div></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenshinServicesCards;