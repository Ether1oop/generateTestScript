const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NEWTON",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NEWTON");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x91B2D70CD875c635a6A7426E6C981B09f36129c3","0x5fec6996ea131a0000");
		});
	});
});