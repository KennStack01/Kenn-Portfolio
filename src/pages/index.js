import React from "react"
import Layout from '../Components/Layout'
import Profile from '../Components/Home/Profile'
import SEO from "../Components/SeoComponent"



export default function Home() {
  return (
    // <div className="min-h-screen min-w-screen bg-mirage-500">
    <div className="min-h-screen">
      <SEO title="Kenn KIBADI - Software Developer | Product Designer" description="Design Beautiful Apps from wireframes to real functionalities. Discover now." />
      <Layout>
        {/* <h1>Hello, Kenn</h1> */}
        <Profile />
      </Layout>
    </div>
  )
}
