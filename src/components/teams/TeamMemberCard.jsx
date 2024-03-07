import React from 'react';

function TeamMemberCard (props) {
    let imageSrc = props.imageSrc;
    let name = props.name;
    let desc = props.desc;
    return (
        <div className="carousel-item w-52 h-fit flex flex-col items-center gap-y-8">
            <img src={imageSrc} className='lg:w-40 sm:w-5'/>
            <div>
                <div className='text-2xl font-bold text-black'>{name}</div>
                <p className='text-black'>{desc}</p>
            </div>
            <div className='flex flex-row items-center justify-around py-4 px-2'>
                <img src="src\assets\img\team\genshin-impact-button.png" className='w-1/4 rounded-full' alt="Genshin Impact icon" />
                <img src="src\assets\img\team\honkai-star-rail-button.webp" className='w-1/4 rounded-full' alt="Honkai Star Rail icon" />
                <img src="src\assets\img\team\hoyolab-button.jpg" className='w-1/4 rounded-full' alt="HoYoLab icon" />
            </div>
        </div>
    );
}

export default TeamMemberCard;