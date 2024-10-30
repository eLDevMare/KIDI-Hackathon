import React from 'react';
import yamin from '../assets/image/moh-yamin.jpg';
import Soegondo from '../assets/image/Soegondo.jpg';
import Djoko from '../assets/image/Djoko-marsaid.png';
import Amir from '../assets/image/Amir-Syarifudin.jpg';
import Sarmidi from '../assets/image/Sarmidi-Mangoensarkoro.jpg';
import Wage from '../assets/image/Wage-Rudolf-Soepratman.jpg';
import Dolly from '../assets/image/Dolly-Salim.jpg';
import Soenario from '../assets/image/Soenario-Sastrowardoyo.jpg';
import Sie from '../assets/image/Sie-Kong-Liong.jpg';
import Johanes from '../assets/image/Johannes-Leimena.jpg';

const peopleData = [
    { id: 1, name: 'Moh. Yamin', image: yamin },
    { id: 2, name: 'Soegondo', image: Soegondo },
    { id: 3, name: 'Djoko Marsaid', image: Djoko },
    { id: 4, name: 'Amir Syarifudin', image: Amir },
    { id: 5, name: 'Sarmidi Mangoensarkoro', image: Sarmidi },
    { id: 6, name: 'Wage Rudolf Soepratman', image: Wage },
    { id: 7, name: 'Dolly Salim', image: Dolly },
    { id: 8, name: 'Soenario Sastrowardoyo', image: Soenario },
    { id: 9, name: 'Sie Kong Liong', image: Sie },
    { id: 10, name: 'Johannes Leimena', image: Johanes },
];

function People(props) {
    return (
        <div className="bg-gray-50 text-center p-[2rem] justify-center items-center md:pl-[4rem] md:h-screen h-auto" id="people">
            <h2 className="text-[1.3rem] text-gray-700 font-bold font-kanit md:ml-[-2rem] pl-[2rem]">10 Tokoh</h2>
            <h2 className="text-3xl text-gray-900 font-bold mt-[-0.5rem] font-kanit md:ml-[-2rem] pl-[2rem]">Sumpah Pemuda</h2>

            <div className="flex flex-wrap gap-2 md:gap-5 md:justify-start md:items-start justify-center items-center md:pl-[7rem] mt-[2rem]">
                {peopleData.map(person => (
                    <div key={person.id}
                         className="h-[10rem] w-[7rem] md:h-[13rem] md:w-[10rem] rounded-[3px] border-2 border-black cursor-pointer transition">
                        <img className="w-full h-full object-cover rounded-[1px]" src={person.image} alt={person.name}/>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default People;
