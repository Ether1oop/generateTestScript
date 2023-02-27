const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RepublicToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RepublicToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xCe256cd117Ff1d3BB86613b09CAB976249524BC1","0x3f6d03011307080000");
		});
	});
});