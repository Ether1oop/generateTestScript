const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NTPToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NTPToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xF8CFB2CFd44D06c45830a6A2A2B2F709b734Fa2e","0x043c33c1937564800000");
		});
	});
});