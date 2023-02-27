const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ONIT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ONIT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3B99966a684c880901Ce4C4a309a556895b25BB3","0x1aff84f77f030a51cc00");
		});
	});
});