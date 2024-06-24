import React from 'react';

export default function Match({
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    matchDate,
}) {
    return (
        <article className=" w-full flex flex-col items-center justify-center border-[#383838] border-2 rounded-lg p-4 shadow-lg">
            <div className="flex flex-row items-center justify-center">
                <div className={`${homeTeam === 'Team A' && 'text-red-700'}`}>
                    {homeTeam}
                </div>
                <div className="ml-6">{homeScore}</div>
                <div className="h-[0.2px] w-2 bg-white mx-2"></div>
                <div className="mr-6">{awayScore}</div>
                <div className={`${awayTeam === 'Team A' && 'text-red-700'}`}>
                    {awayTeam}
                </div>
            </div>
            <div className="mt-4 italic">{matchDate}</div>
        </article>
    );
}
