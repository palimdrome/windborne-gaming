import React, { useState } from 'react';

function HoYoLogo (props) {
    let profile = props.profile;
    let imgSrc = props.imgSrc;
    let alt = props.alt;

    const [copied, setCopied] = useState(false);

    const handleClick = async () => {
        // the text (UID) that will be copied to clipboard
        const textToCopy = profile;

        // creates a temporary HTML element that contains the text that must be copied
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);

        // selects the temporary HTML element and copies the text it contains
        tempTextArea.select();
        document.execCommand('copy');

        // immediately removes the temporary HTML element so it won't show up in the screen as its only purpose is to contain the text
        document.body.removeChild(tempTextArea);

        // set the 'copied' state to true indicating that the text have been copied
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000); // reset 'copied' state after 1 second
    }

    return (
        <div className='w-1/4'>
            {/* if the 'copied' state is true (the user just copied a text to clipboard), show a tooltip saying "UID copied" */}
            {copied ? 
            <div className="tooltip tooltip-open tooltip-bottom transition ease-in-out delay-50 duration-300" data-tip="UID copied">
                <img src={imgSrc} className='rounded-full hover:scale-110 transition ease-in-out delay-50 duration-300 cursor-pointer' alt={alt} onClick={handleClick} />
            </div>
            :
            <div>
                <img src={imgSrc} className='rounded-full hover:scale-110 transition ease-in-out delay-50 duration-300 cursor-pointer' alt={alt} onClick={handleClick} />
            </div>
            }
        </div>
    )

};

    

export default HoYoLogo;