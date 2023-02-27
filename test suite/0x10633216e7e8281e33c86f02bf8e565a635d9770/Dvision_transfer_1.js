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
			await _contract.connect(account0).transfer("0xC03FB6c58433b3a94Be86aff6024DBd8eF7272a8","0x02f24c954a92da270400");
		});
	});
});