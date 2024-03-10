import React, { useState, useEffect } from 'react'
import PageTitle from '../PageTitle';
import TeamMemberCard from './TeamMemberCard';

function Teams(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        // function to fetch the JSON file
        const fetchData = async () => {
            try {
                const response = await fetch('src/data/team/profile.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    const teamMemberCard = data.map(d =>
        <TeamMemberCard profile={d}/>
    )

    return (
        <section className='min-h-screen flex flex-col justify-center items-center gap-y-5 lg:gap-y-10 p-10 lg:p-20' id='teams'>
            <div className='flex flex-col items-center'>
                <PageTitle title={"TEAMS"} subtitle={"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."}/>
            </div>
            <div className='w-screen'>
                <div className="carousel carousel-center lg:w-3/4 w-2/4 max-w-full p-4 space-x-10">
                    {/* <TeamMemberCard imageSrc="src\assets\img\team\lim-avatar.gif" name="Lim" desc="Lorem ipsum dolor" />
                    <TeamMemberCard imageSrc="src\assets\img\team\willow-avatar.webp" name="willow" desc="Lorem ipsum dolor" />
                    <TeamMemberCard imageSrc="src\assets\img\team\rob-avatar.webp" name="Rob" desc="Lorem ipsum dolor" />
                    <TeamMemberCard imageSrc="src\assets\img\team\kai-avatar.webp" name="Kai" desc="Lorem ipsum dolor" /> */}
                    {teamMemberCard}
                </div>
            </div>
        </section>
    );
}

export default Teams;