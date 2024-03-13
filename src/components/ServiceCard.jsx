import React from 'react';

function ServiceCard(props) {
    let image = props.image;
    let service = props.service;
    let subtitle = props.subtitle;
    let linkToSection = props.linkToSection;
    return (
        <div className="card card-compact flex flex-col justify-center items-center">
            <img src={image} className='max-w-xs rounded-3xl' alt="Genshin Impact banner" />
            <div className="card-body bg-transparent gap-0">
                <h3 className="card-title justify-center font-jost font-bold text text-black">{service}</h3>
                <p className='font-jost text-black'>{subtitle}</p>
                <div className="card-actions justify-center p-4">
                    <a href={linkToSection}><button className="btn btn-secondary px-5 rounded-2xl font-jost text-white uppercase">see rates</button></a>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;