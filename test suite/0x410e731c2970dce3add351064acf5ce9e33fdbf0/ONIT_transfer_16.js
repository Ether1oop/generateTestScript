const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ONIT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ONIT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2CDce65e2425165551682e2F7e0AA7Cf53F46848","0x174bf0f0f71b41394c00");
		});
	});
});