const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MXCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MXCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xB8001C3eC9AA1985f6c747E25c28324E4A361ec1","0x1504ad6529005502f800");
		});
	});
});