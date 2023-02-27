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
			await _contract.connect(account0).f(["0x65","0x66","0x67","0x68","0x69","0x6a","0x6b","0x6c","0x6d","0x6e","0x6f","0x70","0x71","0x72","0x73","0x74","0x75","0x76","0x77","0x78","0x79","0x7a","0x7b","0x7c","0x7d","0x7e","0x7f","0x80","0x81","0x82","0x83","0x84","0x85","0x86","0x87","0x88","0x89","0x8a","0x8b","0x8c","0x8d","0x8e","0x8f","0x90","0x91","0x92","0x93","0x94","0x95","0x96"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});