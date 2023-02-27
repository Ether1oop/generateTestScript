const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("StonToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("StonToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x3cFddDf82eeF46f6436C214E849942460EB13C08");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1689a089AA12d6CbBd88bC2755E4c192f8702000","0x7e37be2022b2b09472d89c0000");
		});
	});
});