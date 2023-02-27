const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DimensionToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DimensionToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xd5595395EF72009E6A4ff53D9211157AafDE312a","0x021e19e0c9bab2400000");
		});
	});
});