const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DCMC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DCMC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xcBFd0336C1346F1De33345Bc1423dd12Cf70378D","0x038d7ea4c68000");
		});
	});
});