import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();
  // const teamName = 'Chennai Super Kings';
  let matchesWon;
  let matchesPlayed;
  let winRatio;
  let count = 0;
  const assignData = () => {
    matchesPlayed = team.totalMatches;
    matchesWon = team.totalWins;
    winRatio = (matchesWon / matchesPlayed) * 100;
  };
  useEffect(() => {
    const fetchmatches = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`
      );
      const data = await response.json();
      setTeam(data);
    };
    fetchmatches();
  }, [teamName]);
  assignData();
  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard teamName={team.teamName} latestMatch={team.matches[0]} />
      {team.matches.slice(1).map((m) => (
        <MatchSmallCard teamName={team.teamName} key={count++} match={m} />
      ))}
      <div>
        <h3>Over All Team Performance</h3>
        <p>Total Matches Played : {matchesPlayed}</p>
        <p>Total Matches Won : {matchesWon}</p>
        <p>Win Ratio : {winRatio}</p>
      </div>
    </div>
  );
};
