import React, { useState, useEffect } from 'react'

function GenshinFarmingModal () {

    const [data, setData] = useState([]);

    useEffect(() => {
        // function to fetch the JSON file
        const fetchData = async () => {
            try {
                const response = await fetch('src/data/services/genshin/genshin_farming.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    

    return (
        <dialog id="farming_modal" className="modal">
            <div className="modal-box">
                <form method="dialog" className='hidden lg:flex'>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <h1 className="font-bold text-xl" id='farming'>Farming</h1>

                {/* Start inserting pricelist here */}
                <div className='text-start'>
                    {data.map((data, index) => (
                        <div className='px-2 md:px-5 lg:px-5 py-2' key={index}>
                            <h2 className='font-bold'>{data.title}</h2>
                            {data.types.map((type, typeIndex) => (
                                <div className='px-2 py-2' key={typeIndex}>
                                    <h3>{type}</h3>
                                    <ul className='px-5'>
                                        {data.denoms[typeIndex].map((denom, denomIndex) => (
                                            <li className='flex flex-row justify-between' key={denomIndex}>
                                                <p>{denom}</p>
                                                <div className='h-0.5 grow border border-gray-500 border-solid mx-2.5 my-2.5'></div>
                                                <p>{data.prices[typeIndex][denomIndex]}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {/* Stop inserting pricelist here */}

                <form method="dialog" className="mt-4 lg:hidden">
                    <button className='btn btn-circle'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </form>
            </div>
        </dialog>
    )
}

export default GenshinFarmingModal;