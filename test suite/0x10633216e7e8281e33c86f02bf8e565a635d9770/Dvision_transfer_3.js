const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dvision",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dvision");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xfCb53f4122BddE3A42f48808EC033408d299Ec44","0x043bc4bbddd829600000");
		});
	});
});