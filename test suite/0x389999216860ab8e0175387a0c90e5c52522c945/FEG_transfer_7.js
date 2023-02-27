const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FEG",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FEG");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xE04F0CcD3C2B176427c4d50a363859eDF2638750","0x02f45c4ff007497560");
		});
	});
});