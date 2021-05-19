import React from 'react'
import { navigate } from 'gatsby'


/* eslint-disable */ 

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const ContactForm = () => {

    const [state, setState] = React.useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }


    return (
        <div>
            <div className="mb-5">
                📩 <span className="underline font-sans font-semibold text-white"> Send me a Direct Message </span> 👇 <br/>   
            </div>

            <form 
                name="contact" 
                method="POST" 
                netlify-honeypot="bot-field" 
                data-netlify="true" action="/success" 
                onSubmit={handleSubmit} 
                className="text-white mx-4 md:w-96 md:mx-auto font-sans"
            >
                
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="contact" value="contact" />
                <p className="my-2">
                    <label className="flex flex-col">
                        <h1 className="text-left">
                            Name 
                        </h1>
                        <input type="text" name="name" onChange={handleChange} className="text-mirage-500 font-sans p-1 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-myYellow-500 focus:border-transparent" required/>
                    </label>   
                </p>
                <p className="my-2">
                    <label className="flex flex-col">
                        <h1 className="text-left">
                            Email 
                        </h1>
                        <input type="email" name="email" onChange={handleChange} className="text-mirage-500 font-sans p-1 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-myYellow-500 focus:border-transparent" required/>
                    </label>
                </p>
                <p className="my-2">
                    <label className="flex flex-col">
                        <h1 className="text-left">
                            Message 
                        </h1>
                        <textarea name="message" onChange={handleChange} className="text-mirage-500 font-sans p-2 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-myYellow-500 focus:border-transparent" required></textarea>
                    </label>
                </p>
                <button type="submit" className="bg-white hover:bg-gray-300 py-2 w-36 rounded mb-5 font-sans">
                    <div className="flex flex-row justify-center text-mirage-500 font-semibold "> 
                        <h1 className="mr-1 mt-0 text-lg font-semibold"> Send </h1> 
                        <div className="text-3xl md:text-2xl mb-2 animate-bounce w-3 h-3">🚀</div>
                    </div>
                </button>
            </form>
        </div>
    )
}

export default ContactForm
