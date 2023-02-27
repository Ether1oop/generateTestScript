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
			await _contract.connect(account0).f(["0xc9","0xca","0xcb","0xcc","0xcd","0xce","0xcf","0xd0","0xd1","0xd2","0xd3","0xd4","0xd5","0xd6","0xd7","0xd8","0xd9","0xda","0xdb","0xdc","0xdd","0xde","0xdf","0xe0","0xe1","0xe2","0xe3","0xe4","0xe5","0xe6"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});