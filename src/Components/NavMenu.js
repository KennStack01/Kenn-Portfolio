import React from 'react'
import { IoHome } from 'react-icons/io5'
import { IoConstructSharp } from 'react-icons/io5'
import { IoBook } from 'react-icons/io5'
import { IoChatbubblesSharp } from 'react-icons/io5'
import { Link } from 'gatsby'


const activeLinkStyles = {textDecoration: "underline", textDecorationColor: "#EBFF03", textUnderlinePosition: "under", textDecorationThickness: "3px"}


const NavMenu = () => {
    return (
        <div className="md:invisible sticky bottom-1 mx-1 mt-2 mb-0 font-semibold z-50">
            <nav className="bg-mirage-400 shadow flex flex-row justify-around text-white py-2 rounded">
                <div className="cursor-pointer">
                    <Link to="/" activeStyle={activeLinkStyles} activeClassName="active">
                        <div className="grid justify-items-center border-transparent border-b-3 hover:border-myYellow-500">
                            <div className="text-2xl">
                                <IoHome/>
                            </div>
                            <h2 className="font-sans text-sm prose">Home</h2>
                        </div>
                    </Link>
                </div>
                <div className="cursor-pointer">
                    <Link to="/projects" activeStyle={activeLinkStyles} activeClassName="active">
                        <div className="grid justify-items-center border-transparent border-b-3 hover:border-myYellow-500">
                            <div className="text-2xl">
                                <IoConstructSharp/>
                            </div>
                            <h2 className="font-sans text-sm prose">Projects</h2>
                        </div>
                    </Link>
                </div>
                <div className="cursor-pointer">
                    <Link to="/blog" activeStyle={activeLinkStyles} activeClassName="active">
                        <div className="grid justify-items-center border-transparent border-b-3 hover:border-myYellow-500">
                            <div className="text-2xl">
                                <IoBook/>
                            </div>
                            <h2 className="font-sans text-sm prose">Blog</h2>
                        </div>
                    </Link>
                </div>
                <div className="cursor-pointer">
                    <Link to="/hire" activeStyle={activeLinkStyles} activeClassName="active">
                        <div className="grid justify-items-center border-transparent border-b-3 hover:border-myYellow-500">
                            <span className="animate-ping absolute ml-5 h-5 w-5 rounded-full bg-myYellow-400 opacity-75"></span>
                            <div className="text-2xl">
                                <IoChatbubblesSharp/>
                            </div>
                            <h2 className="font-sans text-sm prose">Hire me</h2>
                        </div>
                    </Link>
                </div>
                
            </nav>
        </div>
    )
}

export default NavMenu
