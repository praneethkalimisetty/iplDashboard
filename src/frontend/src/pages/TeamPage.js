import { React, useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = (props) => {
  const [team, setTeam] = useState({matches: []});
  useEffect(() => {
    const fetchmatches = async () => {
      const response = await fetch("http://localhost:8080/team/Delhi Capitals");
      const data = await response.json();
      setTeam(data);
    //   console.log(data);
    };

    fetchmatches();
  }, []);
  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match ={team.matches[0]}/>
      {team.matches.slice(1).map(match => <MatchSmallCard match={match}/>)}
    </div>
  );
};
