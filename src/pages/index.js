import React from "react"
import { Link } from 'gatsby'
import Layout from '../Components/Layout'
import Profile from '../Components/Home/Profile'


export default function Home() {
  return (
    // <div className="min-h-screen min-w-screen bg-mirage-500">
    <div className="min-h-screen">
      <Layout>
        {/* <h1>Hello, Kenn</h1> */}
        <Profile />
      </Layout>
    </div>
  )
}
