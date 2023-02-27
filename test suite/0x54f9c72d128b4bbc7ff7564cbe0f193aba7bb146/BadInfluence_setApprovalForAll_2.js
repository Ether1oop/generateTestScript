const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BadInfluence",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BadInfluence");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Bad Influence","BAD",["10000","200","4000"]);
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x00000000000111AbE46ff893f3B2fdF1F759a8A8",1);
		});
	});
});