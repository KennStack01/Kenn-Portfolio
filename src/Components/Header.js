import React from 'react'
import { Link } from 'gatsby'
import { IoBulb } from 'react-icons/io5'

const activeLinkStyles = {textDecoration: "underline", textDecorationColor: "#EBFF03", textUnderlinePosition: "under", textDecorationThickness: "3px"}

const Header = () => {

    return (
        <div className="flex flex-row justify-between md:backdrop-filter backdrop-blur md:shadow top-0 md:sticky lg:mb-5 lg:pb-2 mb-0">
            <h1 className="text-white font-semibold mt-2 ml-2 cursor-pointer md:ml-10"> 
                <Link to="/">
                    <div className="flex flex-row">
                        <div className="text-3xl">
                            <IoBulb/>
                        </div>
                        <div className="text-xl m-auto mt-1">
                            Kenn 
                        </div>
                    </div>
                </Link>
            </h1>
            <div>
                <div className="flex flex-row justify-around font-semibold mt-2 mx-2 invisible md:visible">
                    <div className="mx-4 cursor-pointer">
                        <Link to="/" activeStyle={activeLinkStyles} activeClassName="active">
                            <div className="grid justify-items-center">
                                <h1 className="text-white border-transparent border-b-2 hover:border-myYellow-500"> • Home </h1>
                            </div>
                        </Link>
                    </div>
                    <div className=" mx-4 cursor-pointer">
                        <Link to="/projects" activeStyle={activeLinkStyles} activeClassName="active">
                            <div className="grid justify-items-center">    
                                <h1 className="text-white border-transparent border-b-2 hover:border-myYellow-500"> • Projects </h1>
                            </div>
                        </Link>
                    </div>
                    <div className=" mx-4 cursor-pointer">
                        <Link to="/blog" activeStyle={activeLinkStyles} activeClassName="active">
                            <div className="grid justify-items-center">
                                <h1 className="text-white border-transparent border-b-2 hover:border-myYellow-500"> • Blog </h1>
                            </div>
                        </Link>
                    </div>
                    <div className=" mx-4 cursor-pointer">
                        <Link to="/hire" activeStyle={activeLinkStyles} activeClassName="active">
                            <div className="grid justify-items-center">
                                <span className="animate-ping absolute ml-7 h-5 w-5 rounded-full bg-myYellow-400 opacity-75"></span>
                                <h1 className="text-white border-transparent border-b-2 hover:border-myYellow-500"> • Hire me </h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
