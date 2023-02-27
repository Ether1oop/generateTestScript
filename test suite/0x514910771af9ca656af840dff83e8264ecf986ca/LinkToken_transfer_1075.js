const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LinkToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LinkToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3E996A5587FBeD8C83d05EE673D4Aa68679A602f","0x11516a87c5807f4000");
		});
	});
});