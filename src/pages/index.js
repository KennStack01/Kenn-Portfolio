import React from "react"
import Layout from '../Components/Layout'
import Profile from '../Components/Home/Profile'
import SEO from "../components/seo"



export default function Home() {
  return (
    // <div className="min-h-screen min-w-screen bg-mirage-500">
    <div className="min-h-screen">
      <SEO title="Homepage" description="Homepage of Kenn Portfolio" />
      <Layout>
        {/* <h1>Hello, Kenn</h1> */}
        <Profile />
      </Layout>
    </div>
  )
}
