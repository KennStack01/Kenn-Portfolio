import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'

import About from './About'
import { Link } from 'gatsby'

import { IoLogoTwitter } from 'react-icons/io5'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { IoArrowDownCircle } from 'react-icons/io5'
import { IoArrowUpCircle } from 'react-icons/io5'



const Profile = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulSelfIntroduction {
                profilePicture {
                    file {
                        url
                    }
                    title
                }
                myName
                jobTitle
                myDescription {
                    myDescription {
                        bodyText
                    }
                }
            }
        }
    `)

    return (
        <div id="home">
            <div className="md:grid grid-cols-2 place-content-center">
                <div className="mt-2 md:mt-12 md:-ml-10 md:mb-3">
                    <img 
                        className="h-36 w-36 lg:h-48 lg:w-48 mx-auto mt-0 md:mt-10"
                        src={data.contentfulSelfIntroduction.profilePicture.file.url} 
                        alt={data.contentfulSelfIntroduction.profilePicture.title}
                    />
                    <h1 className="text-white my-3 text-lg md:text-lg lg:text-xl font-bold"> {data.contentfulSelfIntroduction.myName} </h1>
                    <h1 className="text-white my-3 text-sm md:text-sm lg:text-md font-semibold	">{data.contentfulSelfIntroduction.jobTitle}</h1>
                </div>

                <div className="md:mt-4 md:mr-12">
                    <p className="flex flex-row justify-center my-5 md:mt-12 md:mr-5">
                        <div className="text-justify text-white text-sm md:text-lg md:mt-12 font-sans font-normal p-3">
                            {data.contentfulSelfIntroduction.myDescription.myDescription.bodyText}
                        </div>
                    </p>
                    {/* Logos Social Media */}
                    <div className="flex flex-row justify-around md:justify-evenly my-7 font-semibold	">
                        <a href="https://www.linkedin.com/in/kennkibadi/"  target="__blank" className="flex flex-row justify-center text-white ">
                            <div className="text-2xl lg:text-3xl">
                                <IoLogoLinkedin />
                            </div>
                            <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">LinkedIn</h1>
                        </a>
                        <a href="https://twitter.com/KennKIBADI" target="__blank" className="flex flex-row justify-center text-white ">
                            <div className="text-2xl lg:text-3xl">
                                <IoLogoTwitter/>
                            </div>
                            <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Twitter</h1>
                        </a>
                        <a href="https://github.com/KennStack01" target="__blank" className="flex flex-row justify-center text-white ">
                            <div className="text-2xl lg:text-3xl">
                                <IoLogoGithub/>
                            </div>
                            <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Github</h1>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-7 mb-3 md:mt-12 flex flex-row justify-center md:my-10 md:mb-12">
                <a href="/#about">
                    <button className="flex flex-row text-mirage-500 bg-white md:mt-6 rounded p-1 pr-6">
                        <h1 className="text-md my-1 ml-2 font-semibold">
                            About me
                        </h1>
                        <div className="text-3xl animate-bounce w-3 h-3">
                            <IoArrowDownCircle/>
                        </div> 
                    </button>
                </a>
            </div>
        
            <br/>
            <br/>
            <br/>
            <br/>

            
            <div id="about" className="md:grid grid-cols-1 mt-3 md:text-2xl md:place-content-center md:mt-4 md:mx-36 md:w-auto">
                <About/>
            </div>
            <br/>

            {/* Go upside Btn */}
            {/* <div className="flex flex-row justify-center mb-5">
                <a href="/#home">
                    <button className="flex flex-row text-mirage-500 bg-white md:mt-6 rounded p-1 pr-6">
                        <h1 className="text-md my-1 ml-2 font-semibold">
                            Up
                        </h1>
                        <div className="text-3xl animate-bounce w-3 h-3">
                            <IoArrowUpCircle/>
                        </div> 
                    </button>
                </a>
            </div> */}
            
        </div>
    )
}

export default Profile
