const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Coti",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Coti");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0xE59Eb88Da4536647C34F30C45B0e094aEf8E8055","0x021ab0c1ec696c4dc500");
		});
	});
});