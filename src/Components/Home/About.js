import React from 'react'
import { Link } from 'gatsby'

function About() {
    return (
        <div>
            <div className="flex flex-row justify-center mt-13">
                <p className="text-justify text-white text-md md:text-lg font-sans font-normal p-3">
                    <span role="img"> 💡 </span> I am a Software Developer, based in Beijing (Pékin), I use Technologies to Build Beautiful Products for Businesses from wireframes to User Interfaces using modern tools for a better User Experience for your costumers. <br/>
                    <span role="img"> 🎨 </span> I design and develop Responsive, Mobile friendly Websites, easy to use and adapt for your projects. <br/> <br/>
                    <span role="img"> 🚀 </span> I love working on Mission-driven Projects with teams and people who love Challenge. <br/> 
                    <span role="img"> 💰 </span> I'm available for Freelance or Jobs or getting Contrat based projects with Clients. <br/><br/>

                    <span role="img"> 😎 </span> Born in Kinshasa (Congo), currently living in Beijing (China), I am passionate about Technologies (not only the Web I do), I'm been working for 4 years (since 2017) as a Graphic Designer (Freelance, Logo Designer), and started working on Web Technologies (from 2018 to this point as a Freelancer, also wishing to work with a Team).<br/> <br/>
                    <span role="img"> 📚 </span> Reading Books and Learning new things on Internet is what can describe me the most: I love Learning and working on Missions. <br/> <br/>
                    <div>
                        So,  <span role="img"> 👉 </span><Link to="/hire" className="font-bold underline"> Give me a Mission</Link>🚀
                    </div>

                </p>
            </div>
        </div>
    )
}

export default About
