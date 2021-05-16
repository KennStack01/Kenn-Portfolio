import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/Layout'
import Toolbox from '../Components/Projects/Toolbox'
import Works from '../Components/Projects/Works'
import { IoArrowForwardCircleSharp } from 'react-icons/io5'
import SEO from "../components/SEO"


const projects = () => {
    return (
        <div className="min-h-screen">
            <SEO title="Project" description="Projects built by Kenn KIBADI" />
            <Layout>
                <Toolbox/>
                <Works/>
                {/* Testimonials */}

                {/* Hire me Btn */}
                <div className="mt-7 mb-3 md:mt-12 flex flex-row justify-center md:my-10 md:mb-12 invisible md:visible">
                    <Link to="/hire">
                        <button className="flex flex-row justify-items-center text-mirage-500 bg-white md:mt-6 rounded p-1">
                            <h1 className="text-md my-1 ml-2 font-semibold">
                                Hire me
                            </h1>
                            <div className="text-2xl ml-1 mt-1">
                                <IoArrowForwardCircleSharp/>
                            </div> 
                        </button>
                    </Link>
                </div>
            </Layout>
        </div>
    )
}

export default projects