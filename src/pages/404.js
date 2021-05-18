import React from 'react'
import Layout from '../Components/Layout'
import SEO from "../components/SEO"
import { Link } from 'gatsby'

/* eslint-disable */ 

function NotFoundPage() {
    return (
        <div className="min-h-screen">    
            <Layout>
                <SEO title="404: Not found" description="Can't find this page"/>
                <h1 className="text-2xl md:text-4xl text-white my-5 mx-auto"> Page not Found :( </h1>
                <Link to="/" className="flex flex-row bg-white font-semibold text-mirage-500 w-60 p-3 rounded shadow mx-auto"> 
                    <p className="text-xl"> Go to Home Page</p> 
                    <span className="text-xl"> 🏡 </span>
                </Link>
            </Layout>
        </div>
    )
}

export default NotFoundPage
