const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LDNToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LDNToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x956C46409c5a20510c1e26a44f5F2235bFb3cFF6","0x03a386163423362dc000");
		});
	});
});