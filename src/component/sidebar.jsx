import React from 'react';

function Sidebar(props) {
    return (
        <div className="scroll-smooth">
            <div className="hidden fixed md:flex flex-col left-[2rem] top-1/3">
                <a href="#home" className="p-[0.5rem] scroll-smooth border-2 border-black text-black text-center rounded-full shadow-inner shadow-gray-700 cursor-pointer bg-gray-200 px-[0.8rem] m-[0.3rem]  " data-target="home" id="x-1">
                    <p> I </p>
                </a>
                <a href="#pledge" className="p-[0.5rem] scroll-smooth border-2 border-black text-black text-center rounded-full shadow-inner shadow-gray-700 cursor-pointer bg-gray-200 px-[0.8rem] m-[0.3rem]  " data-target="about" id="x-2">
                    <p>II </p>
                </a>
                <a href="#timeline" className="p-[0.5rem] scroll-smooth border-2 border-black text-black text-center rounded-full shadow-inner shadow-gray-700 cursor-pointer bg-gray-200 px-[0.8rem] m-[0.3rem]  " data-target="skill" id="x-3">
                    <p>III</p>
                </a>
                <a href="#people" className="p-[0.5rem] scroll-smooth border-2 border-black text-black text-center rounded-full shadow-inner shadow-gray-700 cursor-pointer bg-gray-200 px-[0.8rem] m-[0.3rem]  " data-target="project" id="x-4">
                    <p>IV</p>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;