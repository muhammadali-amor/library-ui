import React from 'react';
import '../assets/UserNavbar.css'
import {FaAngleRight, FaSearch} from "react-icons/fa";
import {FaHeartCircleBolt, FaUserGear} from "react-icons/fa6";
import {GiBookStorm} from "react-icons/gi";

const UserNavbar = () => {
    const text = "Readify";

    const getRandomBlue = () => {
        // return `hsl(240, ${Math.floor(Math.random() * 60) + 40}%, 50%)`;
        const hue = Math.floor(Math.random() * 360); // Har xil ranglar uchun
        const saturation = Math.floor(Math.random() * 60) + 40; // 40% - 100%
        const lightness = Math.floor(Math.random() * 40) + 30; // 30% - 70%
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };
    return (
        <div className={'user-navbar'}>
            <div className="logo">
                <GiBookStorm className={'logoIcon'}/>
                {/*<h3 className={'logoName'} id={"logo"}>Readify</h3>*/}
                <h3 className={'logoName'} id={"logo"}>
                    {text.split("").map((char, index) => (
                        <span key={index} style={{color: getRandomBlue()}}>
                        {char}
                    </span>
                    ))}
                </h3>

            </div>
            <div className="components">
                <div className="search">
                    <button className="btn search-btn">
                        <FaSearch className={'icon'}/>
                    </button>
                    <input type="text" placeholder={'type to search ...'} className="input"/>
                </div>
                <button className="btn likes-btn">
                    <FaHeartCircleBolt className={'icon'}/>
                </button>
                <button className="btn cabinet-btn">
                    <FaUserGear className={'icon'}/>
                    <h4>Cabinet</h4>
                    <FaAngleRight className={'icon'}/>
                </button>
            </div>
        </div>
    );
};

export default UserNavbar;