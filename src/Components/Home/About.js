import React from 'react'
import { Link } from 'gatsby'
 

/* eslint-disable */ 

function About() {
    return (
        <div>
            <div className="flex flex-row justify-center mt-13">
                <p className="text-justify text-white text-md md:text-lg font-sans font-normal p-3">
                    <span role="img"> 💡 </span> I am a Software Developer based in Beijing. I build the App, and make it work for a better User Experience, using Responsive and UI Design approaches; I integrate third-party libraries and structure Content Model architectures for Softwares using React JS frameworks, Headless CMS and GraphQL and I always learn and improve myself with new tools. <br/><br/>

                    <span role="img"> 🚀 </span> I'm available for Freelance/Jobs/Contract based projects with People. <br/><br/>


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
