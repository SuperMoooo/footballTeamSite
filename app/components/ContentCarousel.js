import React from 'react';

export default function ContentCarousel({
    activeSlide,
    slideNumber,
    category,
    title,
}) {
    return (
        <article
            className={`${
                activeSlide === slideNumber ? ' opacity-100' : ' opacity-0'
            } grid grid-cols-4 grid-rows-6 items-start justify-center w-full h-dvh bg-transparent  absolute z--10 text-balance transition-opacity duration-1000`}
        >
            <section className="row-start-3 col-start-2 col-span-3 space-y-2 ml-[-40px]">
                <section>
                    <h4 className=" md:text-lg text-sm">{category}</h4>
                </section>
                <section>
                    <h1 className="bold md:text-6xl sm:text-3xl text-2xl uppercase lg:w-1/3 md:w-full h-full ">
                        {title}
                    </h1>
                    <p className="sm:border-t-8 border-t-4 border-red-700 w-44 sm:border-r-8 border-r-4 border-r-transparent mt-4"></p>
                </section>
                <section>
                    <div className="border-[1px] cursor-pointer group relative border-red-700 p-4 flex items-center justify-around sm:w-64 w-44 bold sm:text-xl text-sm mt-6 after:w-24 after:h-full  after:absolute after:right-0 after:border-b-[72px] after:border-red-700  after:border-l-[20px] after:border-l-transparent">
                        <p>Read More</p>
                        <p className="ml-14 z-10 text-3xl group-hover:scale-150 transition-all duration-500 ">
                            <svg
                                clipRule="evenodd"
                                fillRule="evenodd"
                                strokeLinejoin="round"
                                strokeMiterlimit="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#ffffff"
                                width={40}
                                height={40}
                            >
                                <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" />
                            </svg>
                        </p>
                    </div>
                </section>
            </section>
        </article>
    );
}
