import Image from 'next/image';
import React from 'react';

export default function NewsCard({ newsImage, newsDescripton }) {
    return (
        <div className=" lg:w-full lg:h-[27rem] md:w-[15rem] md:h-[27rem] w-full h-[27rem]  border-[#383838] border-2 rounded-md *:flex-1  shadow-md  flex flex-col items-center justify-center ">
            <picture>
                <Image
                    src={newsImage}
                    alt={newsImage}
                    className="rounded-t-md h-72 object-cover "
                />
            </picture>
            <div className="mt-4 px-4 h-full">
                <p>{newsDescripton}</p>
            </div>
            <div className=" w-full h-full flex items-center justify-end  mb-4">
                <div className="border-[1px] hover:scale-105 transition-all  cursor-pointer rounded-full mr-4  relative border-red-700 px-4 py-2  flex items-center justify-around bold  text-sm mt-6">
                    <p className="w-full">Read More</p>
                </div>
            </div>
        </div>
    );
}
