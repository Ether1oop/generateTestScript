const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dvision",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dvision");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2E1365D399603412249a534Dc9e6BeF09d247C94","0x0877f87d714d8de00000");
		});
	});
});