import React from 'react'
import Layout from '../Components/Layout'
import BlogArticles from '../Components/Blog/BlogArticles'
import SEO from "../Components/SeoComponent"


const blog = () => {
    return (
        <div className="min-h-screen h-max">
            <SEO title="Kenn's Blog" description="Kenn's Blog containing what he shares with the public" />
            <Layout>
                <div>
                    <BlogArticles/>
                    <div className="my-5">
                    <span className="text-xl"> 🔔 </span> <span className=" font-semibold font-sans text-white"> New Blog Posts will appear next week... Stay tuned ! </span> <span className="text-xl">😍</span> <br/>   
                </div>
                </div>
            </Layout>
        </div>
    )
}

export default blog
