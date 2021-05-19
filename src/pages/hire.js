import React from 'react'
import Layout from '../Components/Layout'
import MyLinktree from '../Components/Hire/MyLinktree'
import ContactForm from '../Components/Hire/ContactForm'
import SEO from "../Components/SeoComponent"



function hire() {
    return (
        <div className="min-h-screen h-max">
            <SEO title="Hiring Kenn" description="Hire Kenn as quick as possible" />
            <Layout>
                <MyLinktree />
                <ContactForm/>
            </Layout>
        </div>
    )
}

export default hire
