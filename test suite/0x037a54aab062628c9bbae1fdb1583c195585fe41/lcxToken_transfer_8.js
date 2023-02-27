const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("lcxToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("lcxToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xa0027001d4286230767dD690B9695e42978dCe6e","0x3635c9adc5dea00000");
		});
	});
});