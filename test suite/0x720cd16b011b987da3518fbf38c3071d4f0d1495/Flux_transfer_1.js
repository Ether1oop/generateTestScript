const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Flux",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Flux");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x4E188eA528febE96eaf550B213f35640A4c59544","0x0153005ce0");
		});
	});
});