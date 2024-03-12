import React from 'react'
import data from '../../../data/services/genshin/account_maintenance.json'

function AccountMaintenanceModal(props) {

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
            <dialog id="account_maintenance_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog" className='hidden lg:flex'>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h1 className="font-bold text-xl">Account Maintenance</h1>
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

export default AccountMaintenanceModal;