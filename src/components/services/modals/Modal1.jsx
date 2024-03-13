import React, {useState, useEffect} from 'react'

function Modal1(props) {

    let id = props.id;
    let name = props.name;
    let json = props.jsonData;
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

    const services = data.map(service =>
        <div className='px-2 md:px-5 lg:px-5 py-2 text-start'>
            <div className='flex flex-row justify-between'>
                <h2 className='font-bold'>{service.service_name}</h2>
                <div className='h-0.5 grow border border-gray-500 border-solid mx-2.5 my-2.5'></div>
                <h2 className='font-bold'>  {service.price}</h2>
            </div>
            {service.inclusions.map(inclusion =>
                <p className='ml-4'>{inclusion}</p>
            )}
        </div>)

    return (
        <div>
            <dialog id={div_id} className="modal">
                <div className="modal-box">
                    <form method="dialog" className='hidden lg:flex'>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h1 className="font-bold text-xl focus:outline-none" tabIndex={1}>{name}</h1>
                    {services}

                    <form method="dialog" className="mt-4 lg:hidden">
                        <button className='btn btn-circle'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </form>
                </div>
                
            </dialog> 
        </div>
    );
}

export default Modal1;