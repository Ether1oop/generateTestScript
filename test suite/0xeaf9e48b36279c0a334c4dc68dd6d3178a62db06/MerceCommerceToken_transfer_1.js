const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MerceCommerceToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MerceCommerceToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("4000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x414C4Fd68E8B1CfeC1537f3Cee1F416687026603","0x0654a47d57204b81d00000");
		});
	});
});