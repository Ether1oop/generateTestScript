const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BPTCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BPTCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x37113B502ec7111C58C0a7de8e81a5FEE8FFA3E8","0x7121e59b00");
		});
	});
});