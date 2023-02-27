const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CPAYToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CPAYToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x78f810fd0f4Dc5247061732f65500C0A6fD5D422","0x8f9b");
		});
	});
});