import React from 'react'


const ContactForm = () => {
    return (
        <div>
            <div className="mb-5">
                📩 <span className="underline font-semibold text-white"> Send me a Direct Message </span> 👇 <br/>   
            </div>
            <form name="contact" method="POST" data-netlify="true" className="text-white mx-4 md:w-96 md:mx-auto">
                <p className="my-2">
                    <label className="flex flex-col">
                        <h1 className="text-left">
                            Name 
                        </h1>
                        <input type="text" name="name" className="text-mirage-500 p-1 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-myYellow-500 focus:border-transparent" required/>
                    </label>   
                </p>
                <p className="my-2">
                    <label className="flex flex-col">
                        <h1 className="text-left">
                            Email 
                        </h1>
                        <input type="email" name="email" className="text-mirage-500 p-1 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-myYellow-500 focus:border-transparent" required/>
                    </label>
                </p>
                <p className="my-2">
                    <label className="flex flex-col">
                        <h1 className="text-left">
                            Message 
                        </h1>
                        <textarea name="message" className="text-mirage-500 p-2 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-myYellow-500 focus:border-transparent" required></textarea>
                    </label>
                </p>
                <button type="submit" className="bg-white hover:bg-gray-300 py-2 w-36 rounded mb-5">
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
