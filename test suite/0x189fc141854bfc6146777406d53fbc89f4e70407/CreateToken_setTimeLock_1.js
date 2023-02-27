const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CreateToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CreateToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("setTimeLock",function(){
		it("testing setTimeLock",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setTimeLock("0xC8e0A412455ECAAb8d77cFEF0e1E58740d421696","0x64092180");
		});
	});
});