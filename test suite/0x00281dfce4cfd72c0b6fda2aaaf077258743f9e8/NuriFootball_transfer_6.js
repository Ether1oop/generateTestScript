const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NuriFootball",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NuriFootball");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xDbDc5356403C1301c2c0A5b9E6C65ECd045d3EB8","0xf48e");
		});
	});
});