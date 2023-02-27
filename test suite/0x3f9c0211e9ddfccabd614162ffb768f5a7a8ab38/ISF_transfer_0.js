const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ISF",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ISF");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xfB391A245653581a4b2a4aF309ac7F975aC10b1E","0x108fa7cef51ad9f00000");
		});
	});
});