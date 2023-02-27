const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dragon",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dragon");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x306bB114010f3a11e979C3cd52Be722a070bE182","0x035f1eb8defb824ec000");
		});
	});
});