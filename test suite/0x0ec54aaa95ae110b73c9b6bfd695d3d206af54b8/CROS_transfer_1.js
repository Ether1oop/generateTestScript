const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CROS",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CROS");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xB9beF18FCC18EB5D45715Ff34c1D57070Ea0D4D9","0xd08bd985b86fbc0000");
		});
	});
});