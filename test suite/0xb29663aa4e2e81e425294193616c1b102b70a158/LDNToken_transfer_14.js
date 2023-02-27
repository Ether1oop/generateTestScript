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
			await _contract.connect(account0).transfer("0x320873c425CB4FCe01eCD26cc111aa10E028f85C","0x75d538c1f27c154000");
		});
	});
});