const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NPICK",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NPICK");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xFe8246130A5361Fff60b34e6E8147043cAab9171","0xa5a5b7b47ef2e68a1000");
		});
	});
});