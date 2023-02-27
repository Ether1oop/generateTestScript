const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("YGGToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("YGGToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x1ab4483FFCf1Ca786b86f346735CA432Fb37E51E","0xfa7916c84fad488000");
		});
	});
});