import "./Finished.css";

function Finished({ candidates }) {
  if (!candidates || candidates.length === 0) {
    return (
      <div className="finished">
        <h2>Voting Finished</h2>
        <p>No candidates found.</p>
      </div>
    );
  }

  // 🏆 Find max votes
  const maxVotes = Math.max(...candidates.map((c) => parseInt(c.voteCount)));
  const winners = candidates.filter(
    (c) => parseInt(c.voteCount) === maxVotes
  );

  return (
    <div className="finished">
      <h2>✅ Voting Finished</h2>
      <h3>🏆 Winner{winners.length > 1 ? "s" : ""}:</h3>
      <ul className="winners">
        {winners.map((w, i) => (
          <li key={i}>
            {w.name} ({w.voteCount.toString()} votes)
          </li>
        ))}
      </ul>

      <h3>📊 Final Results:</h3>
      <ul className="results">
        {candidates.map((c, index) => (
          <li
            key={index}
            className={
              parseInt(c.voteCount) === maxVotes ? "highlight" : ""
            }
          >
            {c.name} — {c.voteCount.toString()} votes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Finished;
