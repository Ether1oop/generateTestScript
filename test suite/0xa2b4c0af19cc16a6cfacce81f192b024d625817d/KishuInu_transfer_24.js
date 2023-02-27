const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KishuInu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KishuInu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x991a0DE92b414adbba868fB28ae348479B65623B","0x01a028a28dd4c4bfc0");
		});
	});
});