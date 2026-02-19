import Voting from "./artifacts/contracts/Voting.sol/Voting.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";

// Components
import Login from "./components/Login";
import Connected from "./components/Connected";
import Finished from "./components/Finished";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | login | connected | finished
  const [candidates, setCandidates] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const loadProvider = async () => {
      if (!window.ethereum) return setStatus("login");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);

      const network = await provider.getNetwork();
      if (network.chainId !== 31337) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x7A69" }],
        });
      }

      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contract = new ethers.Contract(contractAddress, Voting.abi, signer);
      setContract(contract);

      const votingActive = await contract.getVotingStatus();
      const candidates = await contract.getAllVotesOfCandidates();
      const remaining = await contract.getRemainingTime();
      const voted = await contract.voters(address);

      setCandidates(candidates);
      setRemainingTime(parseInt(remaining));
      setHasVoted(voted);

      setStatus(votingActive ? "connected" : "finished");

      // Handle chain/account changes
      window.ethereum.on("accountsChanged", () => window.location.reload());
      window.ethereum.on("chainChanged", () => window.location.reload());
    };

    loadProvider();
  }, []);

  // Countdown timer
  useEffect(() => {
    let timer;
    if (status === "connected" && remainingTime > 0) {
      timer = setInterval(async () => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setStatus("finished");
            return 0;
          }
          return prev - 1;
        });
        if (contract && account) {
          const voted = await contract.voters(account);
          setHasVoted(voted);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status, remainingTime, contract, account]);

  // const voteHandler = async (index) => {
  //   if (index === "") return alert("Enter candidate index!");
  //   try {
  //     const tx = await contract.vote(parseInt(index));
  //     await tx.wait();
  //     alert("✅ Vote submitted successfully!");

  //     const updatedCandidates = await contract.getAllVotesOfCandidates();
  //     setCandidates(updatedCandidates);
  //     setHasVoted(true);
  //   } catch (err) {
  //     console.error(err);
  //     alert("❌ Voting failed. Maybe already voted or invalid index.");
  //   }
  // };

  const voteHandler = async (index) => {
  if (!contract) return;

  // Check voting status immediately
  const active = await contract.getVotingStatus();
  if (!active) return alert("Voting is not active!");

  try {
    const tx = await contract.vote(parseInt(index));
    await tx.wait();
    alert("✅ Vote submitted successfully!");

    const updatedCandidates = await contract.getAllVotesOfCandidates();
    setCandidates(updatedCandidates);

    // Update voting status
    const voted = await contract.voters(account);
    setHasVoted(voted);
  } catch (err) {
    console.error(err);
    alert("❌ Voting failed. Maybe already voted or invalid index.");
  }
};

  return (
    <div className="App">
      {status === "login" && <Login />}
      {status === "connected" && (
        <Connected
          account={account}
          candidates={candidates}
          remainingTime={remainingTime}
          voteHandler={voteHandler}
          hasVoted={hasVoted}
        />
      )}
      {status === "finished" && <Finished candidates={candidates} />}
    </div>
  );
}

export default App;
