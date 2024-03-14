import React, { useState, useEffect } from 'react'
import PageTitle from '../PageTitle';
import TimelineSegment from './TimelineSegment';

// import timeline from '../data/about/timeline.json';

function Timeline(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // function to fetch the JSON file
        const fetchData = async () => {
            try {
                const response = await fetch('src/data/about/timeline.json');
                const jsonData = await response.json();

                // adds index and maxIndex to each object
                const modifiedData = jsonData.map((item, index) => ({
                    ...item,
                    index: index,
                    maxIndex: jsonData.length
                }));
                setData(modifiedData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return(
        <section className="min-h-screen flex flex-col justify-center items-center gap-y-5 lg:gap-y-10 p-10 lg:px-20 lg:pt-20 bg-neutral" id='about'>
            <div className='flex flex-col items-center'>
                <PageTitle title={"ABOUT"} subtitle={"Discover our journey through time and space, shaping the gaming landscape with unparalleled expertise and dedication."}/>
            </div>
            <div className='flex flex-col items-start lg:items-center md:items-center'>
            <div className='w-full'>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {data.map((item) => (
                        // pass each item as props to the TimelineSegment component
                        <TimelineSegment key={item.index} data={item} />
                    ))}
                </ul>
            </div>
            </div>
            </section>
    );
}

export default Timeline;