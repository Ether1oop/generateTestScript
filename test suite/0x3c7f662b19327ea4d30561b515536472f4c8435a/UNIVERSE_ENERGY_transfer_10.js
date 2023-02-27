const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UNIVERSE_ENERGY",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UNIVERSE_ENERGY");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6EEDB69bA49EADee7438257662E4973b756aFF56","0x0454ad0bb5b21800");
		});
	});
});