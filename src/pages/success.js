import React from 'react'
import Layout from '../Components/Layout'
import SEO from "../Components/SeoComponent"
import { Link } from 'gatsby'

/* eslint-disable */ 

function success() {
    return (
        <div className="min-h-screen">    
            <Layout>
                <SEO title="Success" description="Success Page Contact form"/>
                <h1 className="text-2xl font-sans font-normal md:text-4xl text-white mt-8 mx-auto"> Thanks for Contacting me 👌 </h1>
                <h1 className="text-xl font-sans font-normal md:text-4xl text-white my-5 mx-auto"> See you soon 🎉 </h1>
                <Link to="/" className="flex flex-row bg-white font-semibold text-mirage-500 w-60 p-3 rounded shadow mx-auto"> 
                    <p className="text-lg font-sans"> See my Home Page </p> 
                    <span className="text-xl"> 🏡 </span>
                </Link>
            </Layout>
        </div>
    )
}

export default success
