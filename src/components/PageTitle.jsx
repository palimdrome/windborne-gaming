import React from 'react'

function PageTitle(props) {
    let title = props.title;
    let subtitle = props.subtitle;
    return(
        <div className='h-1/4 w-5/6 lg:w-3/4 flex flex-col justify-center gap-1'>
            <h2 className="font-jost font-bold text-4xl xl:text-5xl text-black uppercase">{title}</h2>
            <p className="font-jost text-black text-base md:text-base lg:text-lg xl:text-xl">{subtitle}</p>
        </div>
    );
}

export default PageTitle;