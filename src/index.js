import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyComponentLogic from './components/MyComponentLogic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3);
  
        // Import contract ABI from a separate file
        const contractABI = require('./path/to/contractABI.json');

        const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with actual address
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        setContract(contract);
  
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error initializing Web3:', error);
      }
    };

    initWeb3();
  }, []);

  // ... (remaining code for registerUser, issueCredential, etc.)

const registerUser = async (name, email) => {
  try {
    const tx = await contract.methods.registerUser(name, email).send({ from: account });
    console.log('User registered:', tx.transactionHash);
    // Handle success, e.g., show a success message
  } catch (error) {
    console.error('Error registering user:', error);
    // Handle error, e.g., show an error message
  }
};

const issueCredential = async (issuer, credentialType, certificateHash) => {
  try {
    const tx = await contract.methods.issueCredential(issuer, credentialType, certificateHash).send({ from: account });
    console.log('Credential issued:', tx.transactionHash);
    // Handle success, e.g., update UI to show the new credential
  } catch (error) {
    console.error('Error issuing credential:', error);
    // Handle error, e.g., show an error message
  }
};
      {/* Use React Bootstrap components to create a user-friendly interface */}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals