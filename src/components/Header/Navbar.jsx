import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const navItems = [
        { name: "CREDIT", path: "#" },
        { name: "DEBIT", path: "#" },
        { name: "APP", path: "#" },
        { name: "LEARN", path: "#" },
    ];

    return (
        <>
        <div className=" flex justify-end w-full">
         <button className=" rounded-full px-12 md:px-24   py-4 bg-white"></button>

        </div>
            <div className=" flex justify-between p-2 md:px-24 items-center relative" >

                <Link to="/">
                    <h1 className=" text-4xl font-semibold">Sable.</h1>
                </Link>


                {/* naviItems */}
                <div className="flex gap-4 md:gap-8 items-center  ">
                    {navItems.map((item, index) => (
                        <Link className=" text-sx " to={item.path} key={index}>
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="">
                    <button></button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
