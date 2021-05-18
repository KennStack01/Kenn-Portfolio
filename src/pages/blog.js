import React from 'react'
import Layout from '../Components/Layout'
import BlogArticles from '../Components/Blog/BlogArticles'
import SEO from "../components/SEO"


const blog = () => {
    return (
        <div className="min-h-screen h-max">
            <SEO title="Blog" description="Kenn's Blog" />
            <Layout>
                <div>
                    <BlogArticles/>
                </div>
            </Layout>
        </div>
    )
}

export default blog
