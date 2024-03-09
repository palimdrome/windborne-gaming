import React from 'react'
import PageTitle from './PageTitle';

function Timeline(props) {
    return(
        <section className="min-h-screen flex flex-col justify-center items-center gap-y-5 lg:gap-y-10 p-10 lg:p-20" id='about'>
            <div className='flex flex-col items-center'>
                <PageTitle title={"ABOUT"} subtitle={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."}/>
            </div>
            <div className='w-1/3'>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li className='gap-x-5'>
                        <div className="timeline-middle">
                            <img className="w-40 rounded-full border-8 border-black" src="src\assets\img\about\about-1.png" alt="Genshin Impact Soft Launch"/>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
                        </div>
                        <div className="timeline-end mb-10 text-start">
                            <div className="text-lg font-black text-black">Our humble beginnings</div>
                            <p className='text-black pb-20'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                            </p>
                        </div>
                        <hr className='h-96' />
                    </li>
                    <li className='gap-x-5'>
                        <hr />
                        <div className="timeline-middle">
                        <img className="w-40 rounded-full border-8 border-black" src="src\assets\img\about\about-1.png" alt="Genshin Impact Soft Launch"/>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <div className="text-lg font-black text-black">Genshin Impact</div>
                            <p className='text-black pb-20'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li className='gap-x-5'>
                        <hr />
                        <div className="timeline-middle">
                        <img className="w-40 rounded-full border-8 border-black" src="src\assets\img\about\about-1.png" alt="Genshin Impact Soft Launch"/>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
                        </div>
                        <div className="timeline-end mb-10 text-start">
                            <div className="text-lg font-black text-black">Honkai: Star Rail</div>
                            <p className='text-black pb-20'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            </section>
    );
}

export default Timeline;