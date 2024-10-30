import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    return (
        <div className="bg-gray-100 py-12 sm:py-16 lg:py-20 xl:py-24 px-[1rem] md:pl-[5rem] h-auto md:h-screen" id="timeline">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="w-full text-center">
                    <h2 className="text-[1.3rem] text-gray-700 font-bold font-kanit">Garis Waktu</h2>
                    <h2 className="text-3xl text-gray-900 font-bold mt-[-0.5rem] font-kanit">Sumpah Pemuda</h2>
                </div>
                <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-10 lg:max-w-5xl lg:grid-cols-4 text-left">
                    <li className="flex-start group relative flex lg:flex-col">
                <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                        <div
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-gray-900 border-[1.5px] bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                            <p className="text-black group-hover:text-white transition font-kanit">1908</p>
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mt-2">
                            <h3
                                className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                Budi Utomo
                            </h3>
                            <h4 className="mt-2 text-base text-gray-700 text-[0.9rem]">organisasi pertama yang berfokus pada pergerakan pemuda di Jawa, menandai dimulainya Kebangkitan Nasional. Budi Utomo memperjuangkan kemajuan pendidikan dan kesejahteraan, terutama bagi masyarakat Jawa dan Madura
                                ours.</h4>
                        </div>
                    </li>
                    <li className="flex-start group relative flex lg:flex-col">
                <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                        <div
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-gray-900 border-[1.5px] bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                            <p className="text-black group-hover:text-white transition font-kanit">1926</p>
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mt-2">
                            <h3
                                className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                Kongres Pemuda I
                            </h3>
                            <h4 className="mt-2 text-base text-gray-700 text-[0.9rem]">Kongres Pemuda I diselenggarakan di Batavia (Jakarta) untuk memulai diskusi tentang pentingnya persatuan di antara pemuda dari berbagai latar belakang kedaerahan. Kongres ini dihadiri oleh wakil-wakil dari berbagai organisasi pemuda yang beragam.</h4>
                        </div>
                    </li>
                    <li className="flex-start group relative flex lg:flex-col">
                <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                        <div
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-gray-900 border-[1.5px] bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                            <p className="text-black group-hover:text-white transition font-kanit">1927</p>
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mt-2">
                            <h3
                                className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                Organisasi Indonesia
                            </h3>
                            <h4 className="mt-2 text-base text-gray-700 text-[0.9rem]">eberapa pemuda Indonesia yang belajar di Belanda membentuk organisasi bernama Perhimpunan Indonesia. Mereka mulai mempromosikan gagasan Indonesia Merdeka di kancah internasional dan menginspirasi pemuda di dalam negeri untuk berjuang secara kolektif..</h4>
                        </div>
                    </li>
                    <li className="flex-start group relative flex lg:flex-col">
                        <div
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-gray-900 border-[1.5px] bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                            <p className="text-black group-hover:text-white transition font-kanit">1928</p>
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mt-2">
                            <h3
                                className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                Kongres Pemuda II
                            </h3>
                            <h4 className="mt-2 text-base text-gray-700 text-[0.9rem]">Kongres ini kembali diselenggarakan di Batavia (Jakarta) dan menjadi titik puncak perjuangan pemuda untuk menyatukan bangsa Indonesia. Kongres Pemuda II diprakarsai oleh tokoh-tokoh pemuda seperti Mohammad Yamin, Soegondo Djojopoespito, W.R. Supratman, dan Amir Sjarifuddin.</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline;