import React from 'react'
import data from '../../../data/services/genshin/account_maintenance.json'

function AccountMaintenanceModal(props) {

    const services = data.map(service =>
            <div className='my-9 text-left'>
                <div className='flow-root text-lg'>
                    <p className='float-left'>{service.service_name}</p>
                    <p className='float-right text-bold'>  {service.price}</p>
                </div>
                

                {service.inclusions.map(inclusion =>
                    <p className='ml-4 text-xs'>{inclusion}</p>
                )}
            </div>
        
        )

    return (
        <div>
            <dialog id="account_maintenance_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog" className='hidden lg:flex'>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-xl">Account Maintenance</h3>
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