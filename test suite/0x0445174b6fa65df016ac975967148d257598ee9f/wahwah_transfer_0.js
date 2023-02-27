const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("wahwah",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("wahwah");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xC51988CA9D129aDb050E2B75F0eD7119Ec0A818e","0x878678326eac900000");
		});
	});
});