import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className=" text-xs text-white flex flex-row justify-around">
                <h1>
                    © {new Date().getFullYear()}  Kenn KIBADI
                </h1>
            </div>
        </div>
    )
}

export default Footer
