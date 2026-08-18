const { ethers } = require('ethers');

async function checkTx() {
  const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
  const txHash = '0x13daed83af4cbb8a5b43797f0645a7946d003963d09bbbc226852a8a8017a92f';
  console.log('Checking transaction:', txHash);
  
  try {
    const tx = await provider.getTransaction(txHash);
    const receipt = await provider.getTransactionReceipt(txHash);
    
    if (receipt) {
      console.log('TRANSACTION IS REAL AND CONFIRMED!');
      console.log('Block Number:', receipt.blockNumber);
      console.log('From:', receipt.from);
      console.log('To Contract:', receipt.to);
      console.log('Status:', receipt.status === 1 ? 'SUCCESS' : 'FAILED');
    } else {
      console.log('Transaction not found. Maybe it is pending?');
    }
  } catch (err) {
    console.error('Error fetching tx:', err);
  }
}

checkTx();
