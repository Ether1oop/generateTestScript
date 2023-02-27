const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MXCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MXCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xA8f14B6178c574566D064ff9335a147b7a085083","0x06c6ae8621d036f30000");
		});
	});
});