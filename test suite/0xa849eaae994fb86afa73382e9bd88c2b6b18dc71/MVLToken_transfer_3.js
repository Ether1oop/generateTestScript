const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MVLToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MVLToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x92De13bC09510f3Ae4C052Cd9F859E0556AE5b90","0x0316b497b89fe548efec00");
		});
	});
});