import { useState } from "react";
import "./Connected.css";

export default function Connected({ account, candidates, remainingTime, voteHandler, hasVoted }) {
  const [candidateIndex, setCandidateIndex] = useState("");

  const handleVote = () => {
    const indexNum = parseInt(candidateIndex);
    if (!isNaN(indexNum)) {
      voteHandler(indexNum);
      setCandidateIndex("");
    } else {
      alert("Enter a valid candidate index");
    }
  };

  return (
    <div className="connected-container">
      <h2>Wallet Connected ✅</h2>
      <p><strong>Account:</strong> {account}</p>
      <p><strong>Remaining Time:</strong> {remainingTime} seconds</p>

      <h3>📊 Candidates:</h3>
      <ul>
        {candidates.map((candidate, idx) => (
          <li key={idx}>
            {idx}. {candidate.name} — {candidate.voteCount.toString()} votes
          </li>
        ))}
      </ul>

      {!hasVoted ? (
        <div className="vote-input">
          <input
            type="number"
            placeholder="Enter candidate index"
            value={candidateIndex}
            onChange={(e) => setCandidateIndex(e.target.value)}
          />
          <button onClick={handleVote}>Vote</button>
        </div>
      ) : (
        <p className="already-voted">✅ You have already voted</p>
      )}
    </div>
  );
}
