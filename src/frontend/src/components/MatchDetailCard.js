import { React } from "react";

export const MatchDetailCard = (props) => {
  if (!props.match) return null;
  return (
    <div className="MatchDetailCard">
      <h3>Latest Matches</h3>
      <h4>Match Details</h4>
      <h3>
        {props.match.team1} vs {props.match.team2}
      </h3>
    </div>
  );
};
