const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Anarchy",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Anarchy");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xc24D30475eca133302192B502085a3CC124b0b9b","0x1ea79f3dd000");
		});
	});
});