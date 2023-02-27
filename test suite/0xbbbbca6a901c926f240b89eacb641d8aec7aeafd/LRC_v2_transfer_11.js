const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LRC_v2",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LRC_v2");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x512c090ccD5c68B899C6cc1489adb5Ec8B4FB477","0x34266e8f1b05c80000");
		});
	});
});