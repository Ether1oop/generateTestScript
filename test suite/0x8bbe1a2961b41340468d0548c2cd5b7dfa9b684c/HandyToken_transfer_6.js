const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HandyToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HandyToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x89f478cFD95D6E5890a7B3597E8915f308416088","0x69e10de76676d0800000");
		});
	});
});