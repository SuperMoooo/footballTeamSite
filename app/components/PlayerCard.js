import React from 'react';
import Image from 'next/image';
export default function PlayerCard({ playerImage, playerName }) {
    return (
        <div className=" lg:w-60 lg:h-[21rem] md:h-[19rem] sm:w-52 sm:h-72 w-36 h-56 border-[#383838] border-2 rounded-md *:flex-1  shadow-md  flex flex-col items-center justify-center">
            <picture>
                <Image
                    src={playerImage}
                    alt={playerName}
                    objectFit="cover"
                    className="object-cover rounded-t-md h-full  "
                />
            </picture>
            <div className="w-full h-full flex items-center justify-center">
                <h3 className="text-center">{playerName}</h3>
            </div>
        </div>
    );
}
