require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad inflict knife foster tuition'; 
let testAccounts = [
"0x53bc4bbfebc8d470a5cf44dd2632834c9e3475957595feff0b689d4a0a5f7870",
"0x2cc323926c5d6cafe7c5af9efbd8cd362f258728138740c78876581b17d597d5",
"0xe6859374962b4bb7343ae3706b4821708ad7d82ac1680c1822477e3dcfeb0e4a",
"0xe413f5e64a8d39a38e5a0b97cbf901c488079962c9d971c140381fa2f1afe648",
"0x661fd7561564f2e154b56cd53b33963b4bdf90bb511ea1afdeae5541560c72d6",
"0x3b26c27c9c27fc7c130c5e842b51e1e853c14fd9058b4088560911dfb2595f13",
"0x9f55eb63933ab0207ad0b54e411810cfaf3f41b8846fd8713a320a8cfe272660",
"0x01c909ed41ce8b146178d81710807140e80f34faf17150004d4e9f0175a3a867",
"0x2c27a190e25568808f16a72551d2ca800fe9ed535327753ebd3821f81e279ffb",
"0xbac3960b4ffb99015b8e05990a0ae6618c52248574177c5266338b280b58cb73"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

