const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LocusToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LocusToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2fFcCfa5db6BD3aED7Ec405DF58Ff0C92b1a1842","0x04d69b72779ee63c6000");
		});
	});
});