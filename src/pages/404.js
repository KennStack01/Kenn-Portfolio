import React from 'react'
import Layout from '../Components/Layout'
import SEO from "../components/SEO"
import { Link } from 'gatsby'

function NotFoundPage() {
    return (
        <div className="min-h-screen">    
            <Layout>
                <SEO title="404: Not found" description="Can't find this page"/>
                <h1> 404: Page not Found :( </h1>
                <Link to="/" className="flex flex-row bg-white text-mirage-500 p-3 rounded shadow mx-auto"> 
                    <p> Go to Home Page</p> 
                    <span> 🏡 </span>
                </Link>
            </Layout>
        </div>
    )
}

export default NotFoundPage
