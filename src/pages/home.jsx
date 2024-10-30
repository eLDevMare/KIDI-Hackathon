import React from 'react';
import Background from '../assets/image/background.jpg';
import Navbar from "../component/navbar.jsx";
import Sidebar from "../component/sidebar.jsx";
import Pledge from "../component/pledge.jsx";
import Timeline from "../component/timeline.jsx";
import People from "../component/people.jsx";
import  '../index.css/';

function Home(props) {
    return (
        <div className="scroll-smooth">
            <Sidebar/>
            <div className="bg-primary-color h-full items-center text-center flex flex-col justify-center" id="home"
                 style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh'
            }}>

                <div className="flex flex-col text-gray-100 gap-0">
                    <p className="text-[0.8rem]">Sumpah Pemuda</p>
                    <h1 className="text-[3.5rem] font-bold mt-[-1.1rem] font-kanit">Youth Pledge</h1>
                </div>
                <div id="pledge" className="absolute bottom-[4rem]"></div>
            </div>



            <Pledge/>
            <Timeline/>
            <People/>
        </div>
    );
}

export default Home;
