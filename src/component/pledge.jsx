import React from 'react';
import Pemuda from '../assets/image/pemuda.jpg';
import Tokoh from '../assets/image/tokoh-utamajpg.jpg'
import Soegondo from '../assets/image/Soegondo.jpg'
import Tokoh_1 from '../assets/image/tokoh-1.jpg'
import Tokoh_2 from '../assets/image/tokoh-2.jpg'
function Pledge(props) {
    return (
        <div className="bg-gray-50 text-gray-900 font-sans md:h-[80vh] items-center flex flex-col justify-center pl-[2rem] md:pl-[7rem] pr-[2rem] h-screen">
        <div className="max-w-6xl mx-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 ml-[0.2rem]">Sumpah Pemuda</h2>
                    <h1 className=" text-[2.3rem] font-bold text-gray-900 font-kanit md:mt-[0.3rem] mt-0 md:leading-[3.5rem] leading-[2.3rem]">Apa Itu Sumpah Pemuda?</h1>
                    <p className="mt-4 text-base text-gray-700">
                        Sumpah Pemuda adalah sebuah ikrar yang dicetuskan oleh para pemuda Indonesia dalam Kongres Pemuda II yang berlangsung pada tanggal 27-28 Oktober 1928 di Batavia (sekarang Jakarta). Kongres ini merupakan pertemuan besar bagi organisasi-organisasi pemuda dari berbagai daerah di Indonesia, yang bertujuan untuk mempererat persatuan dalam rangka mencapai kemerdekaan dari penjajahan. Para pemuda berikrar:
                    </p>
                    <div className="mt-2">
                        <p className="mt-2 text-base text-gray-700">1. Bertumpah darah satu, tanah Indonesia.</p>
                        <p className="mt-2 text-base text-gray-700">2. Berbangsa satu, bangsa Indonesia.</p>
                        <p className="mt-2 text-base text-gray-700">3. Menjunjung bahasa persatuan, bahasa Indonesia.</p>
                    </div>
                </div>
                <div className="hidden relative lg:block">
                    <div
                        className="bg-gray-300 rounded-2xl h-[15rem] w-[10rem] border-2 border-black absolute bottom-[-1rem]">
                        <img src={Soegondo} alt="" className="object-cover h-full w-full rounded-2xl"/>
                    </div>
                    <div
                        className="bg-gray-300 rounded-2xl h-[8rem] w-[20rem] border-2 border-black absolute bottom-[-2.5rem] right-[-1rem]">
                        <img src={Tokoh} alt="" className="object-cover h-full w-full rounded-2xl"/>
                    </div>
                    <div
                        className="bg-gray-300 rounded-2xl h-[7.5rem] w-[25rem] border-2 border-black absolute top-[-1.5rem] right-16">
                        <img src={Pemuda} alt="" className="object-cover h-full w-full rounded-2xl"/>
                    </div>
                    <div
                        className="bg-gray-300 rounded-2xl h-[8rem] w-[9rem] border-2 border-black absolute bottom-[6.5rem] right-[10.4rem]">
                        <img src={Tokoh_1} alt="" className="object-cover h-full w-full rounded-2xl"/>
                    </div>
                    <div
                        className="bg-gray-300 rounded-2xl h-[8rem] w-[9rem] border-2 border-black absolute bottom-[7.2rem] right-0">
                        <img src={Tokoh_2} alt="" className="object-cover h-full w-full rounded-2xl"/>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
}

export default Pledge;
