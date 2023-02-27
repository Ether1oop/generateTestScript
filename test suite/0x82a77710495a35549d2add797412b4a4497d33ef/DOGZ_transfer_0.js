const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DOGZ",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DOGZ");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("100000000000","DOGZ","DOGZ");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6b3F237D9e68873D62097597B2dC5F74838a7f05","0x24655cc78b38d7ac000000");
		});
	});
});