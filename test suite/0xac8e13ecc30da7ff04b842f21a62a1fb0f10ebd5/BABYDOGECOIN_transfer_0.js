const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BABYDOGECOIN",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BABYDOGECOIN");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x229Ba7057e414D55D4c9DAD4d15741EDC754E189","0x7288778c37154420");
		});
	});
});