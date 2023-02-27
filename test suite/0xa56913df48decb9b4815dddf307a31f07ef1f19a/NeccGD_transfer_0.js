const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NeccGD",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NeccGD");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xe1A1199FB31e89B99911644fECDEd9203B85Ba46","0x51104ea52a72f7a2000000");
		});
	});
});