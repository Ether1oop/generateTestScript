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
			await _contract.connect(account0).transfer("0xBd3b54BF47a385A5490Faa6569e54b6A0Dce5568","0x08830238ba8e3f9d00");
		});
	});
});