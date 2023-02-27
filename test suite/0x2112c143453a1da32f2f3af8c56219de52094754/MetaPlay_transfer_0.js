const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MetaPlay",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MetaPlay");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x4003CAefF9d6eB5af6927b0842c90f43F31d25d1","0x4e98d73be0d8ddf00000");
		});
	});
});