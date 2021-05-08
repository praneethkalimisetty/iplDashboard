import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
// import { MatchSmallCard } from "../components/MatchSmallCard";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();
  // const teamName = 'Delhi Capitals'

  useEffect(() => {
    const fetchmatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches/${year}`
      );

      const data = await response.json();
      setMatches(data);
    };
    fetchmatches();
  }, [teamName, year]);

  return (
    <div className="MatchPage">
      <h1>Match Page</h1>
      {matches.map((match) => (
        <MatchDetailCard teamName={teamName} match={match} />
      ))}
    </div>
  );
};
