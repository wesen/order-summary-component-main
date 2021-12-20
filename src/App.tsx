import {useState} from 'react'
import logo from './logo.svg'
import './App.css'

import illustrationHeroUrl from "../images/illustration-hero.svg"
import backgroundMobileUrl from "../images/pattern-background-mobile.svg"
import backgroundDesktopUrl from "../images/pattern-background-desktop.svg"
import iconMusicUrl from "../images/icon-music.svg"

function App() {

    return (
        <div className="h-screen w-screen flex justify-center container">
            <div className="
             w-[376px] lg:w-[1440px]
             bg-pale-blue overflow-auto relative
             bg-pattern-mobile lg:bg-pattern-desktop
             bg-left-top bg-no-repeat">
                <div className="
                font-red-hat-display
                bg-white rounded-xl
                mt-[71px] w-[327px]
                lg:mt-[102px] lg:w-[450px]
                mx-auto overflow-hidden
                shadow-card
                flex flex-col items-center ">
                    <header><img src={illustrationHeroUrl} className="" alt="Hero illustration"/></header>
                    <article className="
                       py-6 px-6 lg:px-12 mt-2
                       flex flex-col items-center
                       gap-3 lg:gap-5
                       ">
                        <h2 className="
                           text-black font-red-hat-display text-heading font-black
                           lg:text-heading-lg lg:mt-[13px]
                          ">
                            Order Summary
                        </h2>
                        <p className="
                        lg:-mt-[1px]
                      font-red-hat-display text-light-text text-center font-medium
                      text-body-md lg:text-body-lg
                      px-2 lg:px-7
                    ">
                            You can now listen to millions of songs, audiobooks, and podcasts on any
                            device anywhere you like!
                        </p>

                        <div className="
                        w-full bg-very-pale-blue rounded-lg
                        flex flex-row items-center justify-between
                        p-[17px] lg:px-6 mt-3 lg:mt-0 lg:py-6
                        ">
                            <img src={iconMusicUrl} alt=""/>
                            <div className="flex flex-col items-start gap-1">
                                <p className="
                                text-black font-black text-caption-md lg:text-caption-lg
                                 mr-8 lg:mr-20">
                                    Annual Plan
                                </p>
                                <p className='text-caption-md lg:text-caption-lg text-desaturated-blue'>
                                    $59.99/year
                                </p>
                            </div>

                            <a href="#" className="text-bright-blue text-link-md underline font-bold">Change</a>
                        </div>

                        <button className="
                        shadow-button rounded-lg
                        bg-bright-blue text-white w-full
                        mt-3
                        font-black text-button p-4 py-[15px] lg:mt-3 lg:hover:bg-purple
                        ">
                            Proceed to Payment
                        </button>
                        <button className="mt-2 mb-1 lg:mt-3 lg:mb-5
                        text-desaturated-blue font-black text-button
                        ">
                            Cancel Order
                        </button>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default App
