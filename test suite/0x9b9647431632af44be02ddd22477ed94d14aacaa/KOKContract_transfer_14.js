const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KOKContract",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KOKContract");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6A6BD61f584108D5F95f4dAfdA1ead2CB8E72a44","0x08ac6c3dad3a1dcf7c00");
		});
	});
});