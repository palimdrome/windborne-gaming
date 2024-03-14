import React from 'react'

function ScrollToTopButton() {
    return(
        <a href="#" className="btn btn-circle fixed bg-primary hover:bg-transparent border-4 border-white right-10 md:right-16 lg:right-20 bottom-20">
            <svg className='w-1/2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
        </a>
    )
}

export default ScrollToTopButton