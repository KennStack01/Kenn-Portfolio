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
                </div>
            </Layout>
        </div>
    )
}

export default blog
