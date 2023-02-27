const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RumbleKongLeague",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RumbleKongLeague");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1627495200");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xf42aa99F011A1fA7CDA90E5E98b277E306BcA83e",1);
		});
	});
});