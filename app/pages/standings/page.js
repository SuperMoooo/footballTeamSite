import Match from '@/app/components/Match';
import Navbar from '@/app/components/Navbar';
import StandingsTable from '@/app/components/StandingsTable';
import React from 'react';

export const metadata = {
    title: 'Standings',
    description: 'Current standings of the league',
};

export default function StandingsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#1a1a1a] w-full h-full absolute top-0 left-0">
                <article className="w-full h-full flex sm:flex-row flex-col items-center space-y-6 sm:space-y-0 justify-center *:flex-1 sm:space-x-10 sm:mt-0 mt-48 p-6">
                    <section className="w-full grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 place-items-center sm:ml-16">
                        <Match
                            homeTeam={'Team A'}
                            awayTeam={'Team B'}
                            homeScore={1}
                            awayScore={2}
                            matchDate={'04/04/2022'}
                        />
                        <Match
                            homeTeam={'Team D'}
                            awayTeam={'Team A'}
                            homeScore={1}
                            awayScore={4}
                            matchDate={'08/04/2022'}
                        />
                        <Match
                            homeTeam={'Team A'}
                            awayTeam={'Team C'}
                            homeScore={2}
                            awayScore={0}
                            matchDate={'14/04/2022'}
                        />
                        <Match
                            homeTeam={'Team E'}
                            awayTeam={'Team A'}
                            homeScore={0}
                            awayScore={0}
                            matchDate={'19/04/2022'}
                        />
                        <Match
                            homeTeam={'Team A'}
                            awayTeam={'Team F'}
                            homeScore={2}
                            awayScore={5}
                            matchDate={'24/04/2022'}
                        />
                    </section>
                    <section className="w-full h-full flex flex-col items-center justify-center sm:p-6">
                        <StandingsTable />
                    </section>
                </article>
            </main>
        </>
    );
}
