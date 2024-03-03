import React from 'react';
import background from '../assets/img/homepage-cropped.png'

function Welcome(props) {
    return (
        <div id='welcome'>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`}}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-full">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Windborne,</h1>
                        <h1 className="mb-5 text-5xl font-bold">Traveller _</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-blue-1 text-white uppercase">Tell me more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;