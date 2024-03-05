import React from 'react';

function ServiceCard(props) {
    let image = props.image;
    return (
        <div className="card card-compact lg:w-5/12">
            <figure className='rounded-3xl'>
                <img src={image} alt="Genshin Impact banner" />
            </figure>
            <div className="card-body bg-transparent gap-0">
                <h2 className="card-title justify-center text-black font-bold">Genshin Impact</h2>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
                <div className="card-actions justify-center p-5">
                    <button className="btn btn-primary text-white">SEE RATES</button>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;