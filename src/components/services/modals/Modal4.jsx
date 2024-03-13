import React from 'react'

function Modal4 (props) {

    let id = props.id;
    let pub_url = props.pub_url;
    let div_id = id + "_modal"

    return(
        <dialog id={div_id} className="modal">
            <div className="modal-box p-2 max-w-2xl">

                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                {/* Insert the image here */}
                <img className='pt-12' src={pub_url} alt="" />
                {/* Stop inserting the image here */}

                <div className="modal-action">
                </div>
            </div>
        </dialog>
    )
}

export default Modal4;