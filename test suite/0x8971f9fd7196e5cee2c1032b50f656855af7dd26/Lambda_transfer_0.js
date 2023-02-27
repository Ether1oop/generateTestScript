const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Lambda",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Lambda");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x9949930CD7a8DD314833d6e608BD73aECdB65c31","0xb4bbc623f8def53c00");
		});
	});
});