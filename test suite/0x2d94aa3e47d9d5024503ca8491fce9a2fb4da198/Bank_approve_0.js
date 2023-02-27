const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Bank",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Bank");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xf26d1Bb347a59F6C283C53156519cC1B1ABacA51","0xf26d1Bb347a59F6C283C53156519cC1B1ABacA51","1714824000");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x513E0a261af2D33B46F98b81FED547608fA2a03d","0x3635c9adc5dea00000");
		});
	});
});