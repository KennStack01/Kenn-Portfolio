import React from 'react'


import { IoConstructSharp } from 'react-icons/io5'
import { IoLogoHtml5 } from 'react-icons/io5'
import { IoLogoCss3 } from 'react-icons/io5'
import { SiBootstrap } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiNodeDotJs } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiGatsby } from 'react-icons/si'
import { SiGraphql } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiNpm } from 'react-icons/si'
import { SiYarn } from 'react-icons/si'
import { SiVisualstudiocode } from 'react-icons/si'
import { RiChromeFill } from 'react-icons/ri'
import { SiFigma } from 'react-icons/si'
import { DiPhotoshop } from 'react-icons/di'




const Toolbox = () => {
    return (
        <div className="flex flex-col">
            <div className="text-mirage-500 bg-white rounded w-32 md:w-36 m-auto p-2 pl-3 md:p-4 md:mb-5 md:mt-10">
                <div className="flex flex-row">
                    <h1 className="text-md md:text-lg my-1 ml-2 font-semibold md:font-bold">
                        Toolbox
                    </h1>
                    <div className="text-3xl md:text-4xl md:pr-2">
                        <IoConstructSharp/>
                    </div> 
                </div>
            </div>
            <div className="text-white grid grid-cols-4 place-items-center my-7 mx-auto">
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <IoLogoHtml5/>
                </div>
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <IoLogoCss3/>
                </div>
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <SiBootstrap/>
                </div>
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <SiTailwindcss/>
                </div>
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <SiJavascript/>
                </div>
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <SiNodeDotJs/>
                </div>
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <SiReact/>
                </div>
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <SiGatsby/>
                </div>
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <SiGraphql/>
                </div>
                <div className="text-4xl m-5 md:m-8 md:text-7xl">
                    <SiGithub/>
                </div>
                <div className="text-4xl m-3 md:text-7xl">
                    <SiGit/>
                </div>
                <div className="text-4xl m-3 md:text-7xl">
                    <SiNetlify/>
                </div>
                <div className="text-4xl m-3 md:text-7xl">
                    <SiNpm/>
                </div>
                <div className="text-4xl m-3 md:text-7xl">
                    <SiYarn/>
                </div>
                <div className="text-4xl m-3 md:text-7xl">
                    <SiVisualstudiocode/>
                </div>
                <div className="text-4xl m-3 md:text-7xl">
                    <RiChromeFill/>
                </div>
                <div className="text-4xl m-3 md:text-7xl">
                    <SiFigma/>
                </div>
                <div className="text-4xl m-3 md:text-7xl">
                    <DiPhotoshop/>
                </div>
            </div>
        </div>
    )
}

export default Toolbox
