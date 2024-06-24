import React from 'react';
import StandingTeam from './StandingTeam';

export default function StandingsTable() {
    return (
        <article className="lg:w-2/3 w-full flex flex-col items-center justify-center border-[#383838] border-2 rounded-lg p-4 shadow-lg">
            {/* TABLE TITTLES */}
            <div className="flex flex-row justify-between items-center w-full mb-8 *:text-[#949494]">
                <div>Team</div>
                <ul className="flex flex-row justify-center items-center space-x-6">
                    <li>PTS</li>
                    <li>W</li>
                    <li>L</li>
                    <li>D</li>
                </ul>
            </div>
            {/* TABLE INFO */}
            <div className="w-full flex flex-col items-center justify-center space-y-4">
                <StandingTeam
                    teamName={'Team B'}
                    points={9}
                    wins={3}
                    losses={2}
                    draws={0}
                />
                <StandingTeam
                    teamName={'Team A'}
                    points={7}
                    wins={2}
                    losses={2}
                    draws={1}
                />
                <StandingTeam
                    teamName={'Team C'}
                    points={7}
                    wins={2}
                    losses={2}
                    draws={1}
                />
                <StandingTeam
                    teamName={'Team F'}
                    points={6}
                    wins={2}
                    losses={3}
                    draws={0}
                />
                <StandingTeam
                    teamName={'Team D'}
                    points={5}
                    wins={1}
                    losses={2}
                    draws={2}
                />
                <StandingTeam
                    teamName={'Team E'}
                    points={5}
                    wins={1}
                    losses={2}
                    draws={2}
                />
                <StandingTeam
                    teamName={'Team H'}
                    points={4}
                    wins={1}
                    losses={3}
                    draws={1}
                />
                <StandingTeam
                    teamName={'Team G'}
                    points={3}
                    wins={1}
                    losses={4}
                    draws={0}
                />
                <StandingTeam
                    teamName={'Team Z'}
                    points={1}
                    wins={0}
                    losses={4}
                    draws={1}
                />
                <StandingTeam
                    teamName={'Team J'}
                    points={0}
                    wins={0}
                    losses={5}
                    draws={0}
                    lastTeam={true}
                />
            </div>
        </article>
    );
}
