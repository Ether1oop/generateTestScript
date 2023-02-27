const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Hegic",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Hegic");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3549D6046D735970b29BDC4d605c46db31C7877A","0x013b6180013d4ccf0000");
		});
	});
});