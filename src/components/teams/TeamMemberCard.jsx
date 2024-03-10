import React from 'react';
import HoYoLogo from './HoYoLogo';

function TeamMemberCard ({ profile }) {
    let imgSrc = profile.imgSrc;
    let name = profile.username;
    let desc = profile.desc;
    let genshinUID = profile.genshinUID;
    let hsrUID = profile.hsrUID;
    let hoyolabUID = profile.hoyolabUID;
    return (
        <div className="carousel-item w-52 h-fit flex flex-col items-center gap-y-8">
            <img src={imgSrc} className='w-56 lg:w-44 md:w-44 hover:scale-110 transition ease-in-out delay-50 duration-300'/>
            <div>
                <div className='text-2xl font-bold text-black'>{name}</div>
                <p className='text-black'>{desc}</p>
            </div>
            <div className='flex flex-row items-center justify-around py-4 px-2'>
                {/* <img src="src\assets\img\team\genshin-impact-button.png" className='w-1/4 rounded-full hover:scale-110 transition ease-in-out delay-50 duration-300' alt="Genshin Impact icon" />
                <img src="src\assets\img\team\honkai-star-rail-button.webp" className='w-1/4 rounded-full hover:scale-110 transition ease-in-out delay-50 duration-300' alt="Honkai Star Rail icon" />
                <img src="src\assets\img\team\hoyolab-button.jpg" className='w-1/4 rounded-full hover:scale-110 transition ease-in-out delay-50 duration-300' alt="HoYoLab icon" /> */}
                <HoYoLogo profile={genshinUID} imgSrc={"src/assets/img/team/genshin-impact-button.png"} alt={"Genshin Impact icon"} />
                <HoYoLogo profile={hsrUID} imgSrc={"src/assets/img/team/honkai-star-rail-button.webp"} alt={"Honkai Star Rail icon"} />
                <HoYoLogo profile={hoyolabUID} imgSrc={"src/assets/img/team/hoyolab-button.jpg"} alt={"HoYoLab icon"} />
            </div>
        </div>
    );
}

export default TeamMemberCard;