import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/Layout'
import MyLinktree from '../Components/Hire/MyLinktree'
import ContactForm from '../Components/Hire/ContactForm'
import SEO from "../components/SEO"



function hire() {
    return (
        <div className="min-h-screen h-max">
            <SEO title="Hiring" description="Hire Kenn" />
            <Layout>
                <MyLinktree />
                <ContactForm/>
            </Layout>
        </div>
    )
}

export default hire
