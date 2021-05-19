import React from 'react'
import { Link } from 'gatsby'
 

/* eslint-disable */ 

function About() {
    return (
        <div>
            <div className="flex flex-row justify-center mt-13">
                <p className="text-justify text-white text-md md:text-lg font-sans font-normal p-3">
                    <span role="img"> 💡 </span> I am a Software Developer based in Beijing(Pékin). <br/>
                    <span role="img"> ⚡ </span> I analyze, build the App, and make it work for a better User Experience, using Responsive Design approaches; I integrate third-party libraries and structure Content Model architectures for Softwares using React JS frameworks, Headless CMS and GraphQL and I always learn and update myself with new tools. <br/><br/>
                    <span role="img"> 🎨 </span> I design User Interfaces, by creating branding and beautiful visuals for Products. <br/>
                    <span role="img"> 🎨 </span> I create Mobile friendly Websites, easy to use and adapt for your projects. <br/> <br/>
                    <span role="img"> 🚀 </span> I love working on Mission-driven Projects with teams and people who love Challenge. <br/> 
                    <span role="img"> 💰 </span> I'm available for Freelance/Jobs/Contrat based projects with People. <br/><br/>

                    <span role="img"> 😎 </span> Born in Kinshasa (Congo), I am passionate about Technologies (not only the Web that I do); I'm been working for 5 years (since 2016) as a Graphic Designer (Freelance, Logo Designer), and started learning Web Technologies (from 2017 to this point); In 2020, I started doing Freelance...<br/><br/>
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
