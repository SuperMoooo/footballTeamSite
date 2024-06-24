'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import euroSquad from '../assets/carousel/euroSquad.webp';
import coach from '../assets/carousel/coach.webp';
import team from '../assets/carousel/team.webp';
import goal from '../assets/carousel/goal.webp';

export default function HomeCarousel({ activeSlide, setActiveSlide }) {
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) =>
                prevSlide === 4 ? 1 : prevSlide + 1
            );
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    const handleSlideChange = (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    useEffect(() => {
        // Scroll to the active slide when activeSlide changes
        const targetSlide = document.getElementById(`item${activeSlide}`);
        if (targetSlide) {
            targetSlide.scrollIntoView({ behavior: 'smooth' });
        }
    }, [activeSlide]);

    return (
        <>
            <div className="carousel w-full absolute top-0 left-0 -z-10 h-dvh">
                <div
                    id="item1"
                    className="carousel-item w-full transition-opacity duration-1000 "
                >
                    <Image
                        src={euroSquad}
                        alt={euroSquad}
                        className="object-center object-cover w-full"
                    />
                </div>
                <div
                    id="item2"
                    className="carousel-item w-full transition-opacity duration-1000 "
                >
                    <Image
                        src={coach}
                        alt={coach}
                        className="object-center object-cover w-full"
                    />
                </div>
                <div
                    id="item3"
                    className="carousel-item w-full transition-opacity duration-1000 "
                >
                    <Image
                        src={team}
                        alt={team}
                        className="object-center object-cover w-full"
                    />
                </div>
                <div
                    id="item4"
                    className="carousel-item w-full transition-opacity duration-1000 "
                >
                    <Image
                        src={goal}
                        alt={goal}
                        className="object-center object-cover w-full"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center z-50 w-full py-2 gap-2 absolute bottom-20 left-0 *:w-10 *:h-10 *:after:transition-opacity *:after:duration-1000 *:border-white *:border-[1px] *:rounded-full *:relative">
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        handleSlideChange(1);
                    }}
                    href="#item1"
                    className={` after:absolute after:w-full after:h-full after:bg-red-700 after:rounded-full after:scale-[.90] ${
                        activeSlide === 1
                            ? 'after:opacity-100'
                            : 'after:opacity-0'
                    }`}
                ></a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        handleSlideChange(2);
                    }}
                    href="#item2"
                    className={` after:absolute after:w-full after:h-full after:bg-red-700 after:rounded-full after:scale-[.90] ${
                        activeSlide === 2
                            ? 'after:opacity-100'
                            : 'after:opacity-0'
                    }`}
                ></a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        handleSlideChange(3);
                    }}
                    href="#item3"
                    className={` after:absolute after:w-full after:h-full after:bg-red-700 after:rounded-full after:scale-[.90] ${
                        activeSlide === 3
                            ? 'after:opacity-100'
                            : 'after:opacity-0'
                    }`}
                ></a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        handleSlideChange(4);
                    }}
                    href="#item4"
                    className={` after:absolute after:w-full after:h-full after:bg-red-700 after:rounded-full after:scale-[.90] ${
                        activeSlide === 4
                            ? 'after:opacity-100'
                            : 'after:opacity-0'
                    }`}
                ></a>
            </div>
            <div className="absolute bg-[#1a1a1a] opacity-95 w-full h-dvh top-0 left-0 -z-10"></div>
        </>
    );
}
