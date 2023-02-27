const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CelsiusToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CelsiusToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("7000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x45619862B16Be57926Bb4F6B06C03A7B440A2994","0x0788f8");
		});
	});
});