import React, { useState, useEffect } from 'react'

function Modal3 (props) {

    let id = props.id;
    let name = props.name;
    let json = props.jsonData;
    let note = props.note;
    let div_id = id + "_modal"

    const [data, setData] = useState([]);

    useEffect(() => {
        // function to fetch the JSON file
        const fetchData = async () => {
            try {
                const response = await fetch(json);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    

    return (
        <dialog id={div_id} className="modal">
            <div className="modal-box">
                <form method="dialog" className='hidden lg:flex'>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <h1 className="font-bold text-xl focus:outline-none" tabIndex={1}>{name}</h1>

                {/* Start inserting pricelist here */}
                <div className='text-start'>
                    {data.map((data, index) => (
                        <div className='px-2 md:px-5 lg:px-5 py-2' key={index}>
                            <h2 className='font-bold'>{data.title}</h2>
                            <ul className='px-5'>
                                {data.subtitles.map((subtitle, subtitleIndex) => (
                                    <li className='flex flex-col' key={subtitleIndex}>
                                        <div className='flex flex-row justify-between'>
                                            <p>{subtitle}</p>
                                            <div className='h-0.5 grow border border-gray-500 border-solid mx-2.5 my-2.5'></div>
                                            <p>{data.prices[subtitleIndex]}</p>
                                        </div>
                                        {(data.desc !== undefined) ?
                                        <p className='text-gray-700 text-sm mb-2'>{data.desc[subtitleIndex]}</p>
                                        :
                                        <p className='hidden'></p>}
                                    </li>
                                ))}
                            </ul>
                            {(data.notes !== undefined) ?
                            <p className='text-yellow-600 text-xs'>{data.notes}</p>
                            :
                            <p className='hidden'></p>}
                        </div>
                    ))}
                    {(note !== undefined) ?
                    <p className='text-sm py-5 px-4'>{note}</p>
                    :
                    <p className='hidden'></p>}
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

export default Modal3;