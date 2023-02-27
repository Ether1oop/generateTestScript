const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BSBOT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BSBOT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x7ba185E5aAaDfd34A90aC622ba5E58E18603670C","0x410d586a20a4c00000");
		});
	});
});