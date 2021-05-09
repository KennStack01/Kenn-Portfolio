import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/Layout'
import BlogArticles from '../Components/Blog/BlogArticles'

const blog = () => {
    return (
        <div className="min-h-screen h-max">
            <Layout>
                <div>
                    <BlogArticles/>
                </div>
            </Layout>
        </div>
    )
}

export default blog
