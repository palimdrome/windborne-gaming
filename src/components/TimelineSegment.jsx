import React from 'react';

function TimelineSegment({ data }) {
    let title = data.title;
    let subtitle = data.subtitle;
    let imgSrc = data.imgSrc;
    let alt = data.alt;
    let index = data.index;
    let maxIndex = data.maxIndex;
    
    return (
        <li className='gap-x-5'>
            {index === 0 ? <hr className='hidden'/> : <hr />}
            <div className="timeline-middle">
                <img className="w-32 md:w-40 lg:w-40 rounded-full border-4 lg:border-6 border-secondary" src={imgSrc} alt={alt}/>
            </div>
            {(index === 0 || index % 2 === 0) ? 
            <div className="timeline-end mb-10 md:mb-14 lg:mb-40 text-start">
                <div className="text-lg font-black text-black">{title}</div>
                <p className='max-w-xs text-black pb-20'>{subtitle}</p>
            </div>
            :
            <div className="timeline-end md:timeline-start lg:timeline-start mb-10 md:mb-14 lg:mb-40 text-start md:text-end lg:text-end">
                <div className="text-lg font-black text-black">{title}</div>
                <p className='max-w-xs text-black pb-20'>{subtitle}</p>
            </div>
            }
            {index + 1 == maxIndex ? <hr className='hidden'/> : <hr />}
        </li>
    );
}

export default TimelineSegment;