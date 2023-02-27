const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Sting",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Sting");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0Ae1163807A542F648B20046570f93AeF4741466","0x04d235d0c26aa26c0000");
		});
	});
});