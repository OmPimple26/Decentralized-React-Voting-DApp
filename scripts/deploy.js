const hre = require("hardhat");

async function main() {
  // Candidate names & voting duration (in minutes)
  const candidateNames = ["Om", "Anushka", "Soham", "Purva"];
  const votingDuration = 10; // 10 minutes

  // Deploy contract
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(candidateNames, votingDuration);

  await voting.deployed();

  console.log("✅ Voting contract deployed to:", voting.address);
}

// Recommended pattern to handle async/await
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
