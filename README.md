# Decentralized-React-Voting-DApp
A secure and transparent blockchain-based voting application built with React, Solidity, Hardhat, and Ethers.js ⚡. Users connect via MetaMask 🔐 to cast votes securely on the Ethereum network. Prevents double voting, ensures fairness, and displays real-time results 📊 — showcasing the power of Web3 and decentralized governance 🚀. 

---

## 🚀 Features

- 🔐 MetaMask Wallet Authentication
- 🧾 Smart Contract-based Voting
- 🚫 Prevents Double Voting
- 📊 Real-time Vote Count
- ⚡ Decentralized & Transparent
- 🛡️ Secure Blockchain Transactions

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Ethers.js
- MetaMask

### Backend (Blockchain)
- Solidity
- Hardhat
- Ethereum Local Network

---

## 📂 Project Structure

```
├── contracts/
│   └── Voting.sol
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Connected.css
│   │   │   ├── Connected.jsx
│   │   │   ├── Finished.css
│   │   │   ├── Finished.jsx
│   │   │   ├── Login.css
│   │   │   └── Login.jsx
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── scripts/
│   └── deploy.js
├── test/
│   └── Lock.js
├── .gitignore
├── hardhat.config.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/OmPimple26/Decentralized-React-Voting-DApp.git
cd Decentralized-React-Voting-DApp
```

### 2️⃣ Install Backend Dependencies
```
npm install
```

### 3️⃣ Start Hardhat Local Node
```
npx hardhat node
```

### 4️⃣ Deploy Smart Contract
```
npx hardhat run scripts/deploy.js --network localhost
```

### 5️⃣ Start Frontend
```
cd frontend
npm install
npm start
```

---

## 🖼️ Screenshots
### 🗳️ Voting Interface
<img width="1920" height="860" alt="React Voting Application Blockchain Technology" src="https://github.com/user-attachments/assets/348844e1-308e-406f-ab8c-c50c48bd032b" />

### 📊 Results Page
<img width="1920" height="864" alt="React Voting Application Result Blockchain Technology" src="https://github.com/user-attachments/assets/05259784-3423-4241-a708-a175dccbbb12" />

---

## 🧠 How It Works

User connects MetaMask wallet

Smart contract stores candidate data

User casts vote via blockchain transaction

Contract verifies and prevents duplicate voting

Results update in real-time

---

## 🌍 Future Improvements

Multi-election support

Admin dashboard

Deployment on testnet (Sepolia)

Gas optimization

---

## 👨‍💻 Author

OmPimple26

---

## 📜 License

This project is open-source and available under the MIT License.
