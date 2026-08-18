fetch('https://rpc2.sepolia.org', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    jsonrpc: "2.0",
    method: "eth_getTransactionByHash",
    params: ["0x13daed83af4cbb8a5b43797f0645a7946d003963d09bbbc226852a8a8017a92f"],
    id: 1
  })
}).then(r => r.json()).then(console.log);
