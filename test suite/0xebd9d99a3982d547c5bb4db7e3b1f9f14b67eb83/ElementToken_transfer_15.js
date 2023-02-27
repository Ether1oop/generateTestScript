const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ElementToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ElementToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Everest ID","ID","800000000","18");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xF7189cC21a7Df65eA3bf7d03AFE721d7fee6e604","0x08eb90ce5c5e4bac1398");
		});
	});
});