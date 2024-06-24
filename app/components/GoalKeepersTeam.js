import React from 'react';
import emptyPerson from '@/app/assets/team/emptyPerson.webp';
import PlayerCard from './PlayerCard';
export default function GoalKeepersTeam() {
    return (
        <section className="flex flex-col  justify-center w-full h-full mt-16">
            <h2 className="md:text-2xl text-lg border-2 border-red-700 lg:w-1/5 md:w-1/4 w-1/2 text-center py-4 rounded-full ">
                GoalKeepers
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full h-full gap-6  mt-10  place-items-center">
                <PlayerCard playerImage={emptyPerson} playerName="PlayerName" />
                <PlayerCard playerImage={emptyPerson} playerName="PlayerName" />
                <PlayerCard playerImage={emptyPerson} playerName="PlayerName" />
            </div>
        </section>
    );
}
