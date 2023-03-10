const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinTool_App",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinTool_App");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("f",function(){
		it("testing f",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).f(["0x81","0x82","0x83","0x84","0x85","0x86","0x87","0x88","0x89","0x8a","0x8b","0x8c","0x8d","0x8e","0x8f","0x90","0x91","0x92","0x93","0x94","0x95","0x96","0x97","0x98","0x99","0x9a","0x9b","0x9c","0x9d","0x9e","0x9f","0xa0","0xa1","0xa2","0xa3","0xa4","0xa5","0xa6","0xa7","0xa8","0xa9","0xaa","0xab","0xac","0xad","0xae","0xaf","0xb0","0xb1","0xb2","0xb3","0xb4","0xb5","0xb6","0xb7","0xb8","0xb9","0xba","0xbb","0xbc","0xbd","0xbe","0xbf","0xc0","0xc1","0xc2","0xc3","0xc4","0xc5","0xc6","0xc7","0xc8","0xc9","0xca","0xcb","0xcc","0xcd","0xce","0xcf","0xd0","0xd1","0xd2","0xd3","0xd4","0xd5","0xd6","0xd7","0xd8","0xd9","0xda","0xdb","0xdc","0xdd","0xde","0xdf","0xe0","0xe1","0xe2","0xe3","0xe4","0xe5","0xe6","0xe7","0xe8","0xe9","0xea","0xeb","0xec","0xed","0xee","0xef","0xf0","0xf1","0xf2","0xf3","0xf4","0xf5","0xf6","0xf7","0xf8","0xf9","0xfa","0xfb","0xfc","0xfd","0xfe","0xff","0x0100"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});