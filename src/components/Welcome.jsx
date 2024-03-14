import React from 'react'
import background from '../assets/img/homepage-cropped.png'
import '../styles/fade.css'

function Welcome(props) {
    return (
        <div id='welcome'>
            <div className="hero min-h-screen bg-left" style={{backgroundImage: `url(${background})`}}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-white lg:max-w-full md:max-w-3xl max-w-xl flex flex-wrap lg:flex-col md:flex-col justify-start lg:justify-center md:justify-center gap-y-5 px-10 lg:pt-20 md:pt-20">

                    <h1 className="lg:text-6xl md:text-6xl text-5xl text-left lg:text-center font-bold">Welcome to Windborne,</h1>

                    <div className='relative lg:h-16 h-14 w-full'>
                        <h1 className="title lg:text-8xl text-7xl text-left lg:text-center md:text-center font-bold absolute top-0.5 lg:-top-2 left-0 right-0 ml-auto mr-auto">Traveller</h1>
                        <h1 className="title reverse lg:text-8xl text-7xl text-left lg:text-center md:text-center font-bold absolute top-0.5 lg:-top-2 left-0 right-0 ml-auto mr-auto">Trailblazer</h1>
                    </div>

                    <p className="max-w-lg text-lg text-left lg:text-center md:text-center p-1">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <a href="#services"><button className="btn btn-outline btn-primary border-2 active:bg-primary active:text-white active:border-none  uppercase text-xl font-bold py-2 px-8 mt-5">tell me more</button></a>

                </div>
            </div>
        </div>
    );
}

export default Welcome;