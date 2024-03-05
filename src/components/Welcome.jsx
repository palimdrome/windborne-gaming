import React from 'react'
import background from '../assets/img/homepage-cropped.png'

function Welcome(props) {
    return (
        <div id='welcome'>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`}}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-white">
                    <div className="max-w-full flex flex-wrap lg:flex-col lg:justify-center">
                        <h1 className="mb-5 text-5xl text-left lg:text-center font-bold">Welcome to Windborne,</h1>
                        <h1 className="my-5 py-5 text-7xl text-left lg:text-center font-bold">Traveller _</h1>
                        <p className="my-10 text-left lg:text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-primary border border-0 text-white uppercase lg:place-self-center lg:w-1/4">Tell me more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;