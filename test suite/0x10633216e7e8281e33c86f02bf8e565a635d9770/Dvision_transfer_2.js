const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dvision",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dvision");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x1769767B47F95107c7f73d494b22a8D0299BEF46","0x026c5a16273fe25e5a9c");
		});
	});
});