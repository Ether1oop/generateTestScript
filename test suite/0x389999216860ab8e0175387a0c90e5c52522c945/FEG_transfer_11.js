const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FEG",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FEG");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x01c52a8D4F7DAa7CA71750839573e063aa5C4b54","0x8dc12a0bb5f9a800");
		});
	});
});