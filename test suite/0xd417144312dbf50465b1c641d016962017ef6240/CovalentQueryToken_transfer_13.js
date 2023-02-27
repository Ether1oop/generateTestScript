const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CovalentQueryToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CovalentQueryToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Covalent Query Token","CQT","1000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3CC936b795A188F0e246cBB2D74C5Bd190aeCF18","0x03907ce20745de9970b8");
		});
	});
});