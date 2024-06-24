import React from 'react';

export default function StandingTeam({
    teamName,
    points,
    wins,
    losses,
    draws,
    lastTeam,
}) {
    return (
        <div
            className={`flex flex-row justify-between items-center w-full ${
                !lastTeam && 'border-b-[#383838] border-b-[1px]'
            } `}
        >
            <div className={`${teamName === 'Team A' && 'text-red-700'}`}>
                {teamName}
            </div>
            <ul className="flex flex-row justify-center items-center space-x-5 *:flex-1 *:w-4 *:text-center">
                <li>{points}</li>
                <li>{wins}</li>
                <li>{losses}</li>
                <li>{draws}</li>
            </ul>
        </div>
    );
}
