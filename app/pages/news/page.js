import Navbar from '@/app/components/Navbar';
import NewsCard from '@/app/components/NewsCard';
import React from 'react';
import blankImage from '@/app/assets/imgs/blankImg.webp';

export const metadata = {
    title: 'News',
    description: 'News page',
};

export default function News() {
    return (
        <>
            <Navbar />
            <main className="bg-[#1a1a1a] w-full h-full ">
                <article className="w-full h-full p-2">
                    <section className=" *:text-center w-full h-full flex flex-col items-center justify-center">
                        <section className="*:text-center w-full h-full flex flex-col items-center justify-center mt-24">
                            <h1 className="text-5xl uppercase">News</h1>
                            <p className=" bg-red-700 w-1/5 h-1 mt-2"></p>
                        </section>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full h-full gap-10  mt-20  place-items-center ">
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="New player ready to be announced"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="Construction of the stadium ready"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="Electricity is ready to be installed"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="Win 4-1 against Team D"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="Interview with the manager"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="See the practice video here!"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="Ready for the next match"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="Police escorting the players"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="Drama between fans"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="See the new match kits"
                            />
                            <NewsCard
                                newsImage={blankImage}
                                newsDescripton="Start of the season"
                            />
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}
