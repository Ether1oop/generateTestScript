const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BEP20Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BEP20Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0267F2EfFf43fE1f8dB272669a08c7c4aBB771CA","0x185a29990fe301e00000");
		});
	});
});