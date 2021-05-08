import { React } from "react";
import { Link } from "react-router-dom";

export const MatchDetailCard = ({ latestMatch, teamName }) => {
  if (!latestMatch) return null;
  const otherTeam =
    latestMatch.team1 === teamName ? latestMatch.team2 : latestMatch.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="MatchDetailCard">
      <h3>Latest Matches</h3>
      <h4>Match Details</h4>
      <h1>
        vs <Link to={otherTeamRoute}> {otherTeam} </Link>
      </h1>
      <h2>{latestMatch.date}</h2>
      <h3>at {latestMatch.venue} </h3>
      <h3>
        {latestMatch.matchWinner} won by {latestMatch.resultMargin}{" "}
        {latestMatch.result}
      </h3>
    </div>
  );
};
