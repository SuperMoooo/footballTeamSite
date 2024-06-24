import DefendersTeam from '@/app/components/DefendersTeam';
import ForwardsTeam from '@/app/components/ForwardsTeam';
import GoalKeepersTeam from '@/app/components/GoalKeepersTeam';
import MidFieldersTeam from '@/app/components/MidFieldersTeam';
import Navbar from '@/app/components/Navbar';
import React from 'react';

export const metadata = {
    title: 'Team',
    description: 'Main roster of team A',
};

export default async function TeamPage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#1a1a1a] w-full h-full flex flex-col items-center justify-center ">
                <article className="w-full h-full container mx-auto">
                    <section className="mt-40 *:text-center w-full h-full flex flex-col items-center justify-center">
                        <h1 className="text-5xl uppercase">Team A</h1>
                        <p className=" bg-red-700 w-1/5 h-1 mt-2"></p>
                    </section>
                    <GoalKeepersTeam />
                    <DefendersTeam />
                    <MidFieldersTeam />
                    <ForwardsTeam />
                </article>
            </main>
        </>
    );
}
