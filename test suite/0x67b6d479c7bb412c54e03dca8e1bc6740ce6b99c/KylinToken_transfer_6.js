const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KylinToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KylinToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x759Ec1b3326de6Fd4Ba316F65A6F689c4e4C3092","0x06a755f880683cd40000");
		});
	});
});