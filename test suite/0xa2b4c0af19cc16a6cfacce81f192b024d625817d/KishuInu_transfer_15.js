const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KishuInu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KishuInu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6755e5A19e2380367756DF40ba9407A8F15a7977","0x58a689065359ea6830");
		});
	});
});