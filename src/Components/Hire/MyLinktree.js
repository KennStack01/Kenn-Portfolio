import React from 'react'

import { IoLogoTwitter } from 'react-icons/io5'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { IoMailUnreadOutline } from 'react-icons/io5'
import { CgIndieHackers } from 'react-icons/cg'
import { FaInstagram } from 'react-icons/fa'

/* eslint-disable */ 

const MyLinktree = () => {
    return (
        <div>
            <div className="bg-white text-mirage-500 p-3 w-40 m-auto rounded">
                <h1 className="font-sans font-bold">Let's Connect 👋</h1>
            </div>
            <div className="flex flex-col justify-items-center mx-2 md:mx-12">
                <p className="text-justify text-white md:mx-10 my-5"> Building Products, my Mission is to solve People's problems using Technologies.
                    Connecting with People around the world is a great experience for me. Hence, I have joined multiple Social Networks for the purpose of building networks.
                    I'm available for interesting Projects, Business and Jobs.🚀 <br/>
                </p>
                <div>
                    🔔 <span className="underline font-semibold text-white"> Where you can find me </span> 👇 <br/>   
                </div>
            </div>
            {/* Logos Social Media */}
            <div className="flex flex-row justify-evenly md:justify-evenly my-7 font-semibold">
                <div className="flex flex-col justify-items-center">
                    <a href="https://www.linkedin.com/in/kennkibadi/"  target="__blank" className="flex flex-row justify-center text-white ">
                        <div className="text-2xl lg:text-3xl">
                            <IoLogoLinkedin />
                        </div>
                        <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">LinkedIn</h1>
                    </a>
                    <a href="mailto:kennstack01@gmail.com" target="__blank" className="flex flex-row justify-center text-white my-5">
                        <div className="text-2xl lg:text-3xl">
                            <IoMailUnreadOutline/>
                        </div>
                        <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">E-mail</h1>
                    </a>
                </div>
                <div className="flex flex-col justify-items-center">
                    <a href="https://twitter.com/KennKIBADI" target="__blank" className="flex flex-row justify-center text-white ">
                        <div className="text-2xl lg:text-3xl">
                            <IoLogoTwitter/>
                        </div>
                        <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Twitter</h1>
                    </a>
                    <a href="https://www.indiehackers.com/KennHacker" target="__blank" className="flex flex-row justify-center text-white my-5">
                        <div className="text-2xl lg:text-3xl">
                            <CgIndieHackers/>
                        </div>
                        <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Indie Hackers</h1>
                    </a>
                </div>
                <div className="flex flex-col justify-items-center">
                    <a href="https://github.com/KennStack01" target="__blank" className="flex flex-row justify-center text-white">
                        <div className="text-2xl lg:text-3xl">
                            <IoLogoGithub/>
                        </div>
                        <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Github</h1>
                    </a>
                    <a href="https://www.instagram.com/Kenn.Kibadi" target="__blank" className="flex flex-row justify-center text-white my-5">
                        <div className="text-2xl lg:text-3xl">
                            <FaInstagram/>
                        </div>
                        <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Instagram</h1>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default MyLinktree
