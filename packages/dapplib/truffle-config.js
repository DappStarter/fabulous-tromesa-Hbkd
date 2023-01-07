require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind mixture hunt hen fresh security'; 
let testAccounts = [
"0xa01b6ed6ebea027efb2c6ebac0a1020ac5d9296bceaf7666b58020b9452a2cd3",
"0x36e1d723e7352acd76610946a352d02abb630de486a8563dcd6c7b192c2f4968",
"0x593051eb82aa48b3415bf57fa40e9102b91b77113651ef3caa721c6c2f94e8a0",
"0xc4e14f9473dd101244d5b5977eeac3faa7049d5771274ce842edf9495b790c9b",
"0xbc0e554f651095dc61ff41350d288dbe6839c798f79a99d8de87aa5195a8fa20",
"0xc8c24265e30824662d279b84622b3f231a79d48084f041e4e29414b244612886",
"0xf93251ac94f3c3c2f47fb6aba8500a899538efc319b1492d63bcf199c4c97a22",
"0x7ffc3341a006c6375b206cbed83d39e44377ad019eeb9404f590d0e497deba8a",
"0x31f1453fac9cced34dca65f18133d33bf455f6a201a95103a07053ebebf312f9",
"0x71b5bd3ea57995b5782983f16a370932262427de3237528b4bdae183d620b445"
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

