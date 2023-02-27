const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OraiToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OraiToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0D0707963952f2fBA59dD06f2b425ace40b492Fe","0x2e73236b699434f4b9");
		});
	});
});