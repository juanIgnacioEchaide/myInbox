const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
'eight load grid husband silver abandon shadow pilot patient season embody elephant',
'https://rinkeby.infura.io/v3/cb206ebee3434caca3eb17d07eed1464'
);

const web3 = new Web3(provider);    

const deploy =async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy a contract',accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments:['Hi there!']})
    .send({gas:'1000000',from :accounts[0]})

    console.log('contract deployted to',result.options.address)
}

deploy();

