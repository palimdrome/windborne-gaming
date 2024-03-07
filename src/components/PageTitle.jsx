import React from 'react'

function PageTitle(props) {
    let title = props.title;
    let subtitle = props.subtitle;
    return(
        <div className='h-1/4 w-5/6 lg:w-3/4'>
            <h2 className="text-5xl font-bold text-black">{title}</h2>
            <p className="pt-5 text-black">{subtitle}</p>
        </div>
    );
}

export default PageTitle;