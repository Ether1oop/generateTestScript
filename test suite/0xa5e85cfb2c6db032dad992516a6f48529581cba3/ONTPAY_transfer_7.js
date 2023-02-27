const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ONTPAY",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ONTPAY");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0e7fB3DA9406a4720d7e11577c7044a9E16E2B3B","0xd97daf478353300000");
		});
	});
});