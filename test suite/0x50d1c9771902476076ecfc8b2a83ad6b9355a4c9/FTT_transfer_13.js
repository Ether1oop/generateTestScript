const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FTT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FTT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xC306bD451403b8159d3807F763E1AdE895025181","0x17cc594e140c7c0000");
		});
	});
});