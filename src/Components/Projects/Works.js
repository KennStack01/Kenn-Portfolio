import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import { IoColorPaletteSharp } from 'react-icons/io5'

/* eslint-disable */ 

const Works = () => {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulClientProject(sort: {fields: [date], order: DESC}) {
                edges {
                    node {
                        name
                        screenshots {
                            file {
                                url
                            }
                        }
                        projectDescription {
                            Description
                        }
                        usedTools {
                            tools
                        }
                        linkToWebsite
                    }
                }
            }
        }
    `)

    return (
        <div className="">
            <div className="text-mirage-500 bg-white rounded w-40 m-auto md:mt-8 p-2 pl-3">
                <div className="flex flex-row justify-center">
                    <h1 className="text-md my-1 font-sans font-semibold">
                        My Works
                    </h1>
                    <div className="text-3xl">
                        <IoColorPaletteSharp/>
                    </div> 
                </div>
            </div>
            <div className="md:-ml-16 md:mt-14">
                <div className="md:-ml-14">
                    {
                        data.allContentfulClientProject.edges.map((edge) => (
                            <div className="md:grid grid-cols-2 md:place-items-center my-6">
                                <div className="md:place-self-end mx-3 md:mr-12">
                                    <img 
                                        className="w-auto h-auto rounded md:h-60 md:w-96"
                                        src={edge.node.screenshots.file.url} 
                                        alt={edge.node.screenshots.description}
                                    />
                                </div>
                                <div className="flex flex-col justify-center mx-2 md:-ml-5 md:place-self-center md:mr-12 font-sans">
                                    <h1 className="text-white text-justify font-semibold mt-2 md:mt-0"> <span role="img"> 📌 </span>{edge.node.name} </h1>
                                    <p className="text-white text-justify md:mr-12 mt-2"> {edge.node.projectDescription.Description} </p>
                                    <p className="text-white font-normal text-justify md:mr-12 my-2"> <span role="img"> 💡</span>Tools: <span className="font-normal">{edge.node.usedTools.tools}</span> </p>
                                    <a href={edge.node.linkToWebsite} target="__blank" className="text-white text-justify"> <span role="img"> 👉 </span> <span className="underline font-semibold">Demo</span>  </a>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Works
