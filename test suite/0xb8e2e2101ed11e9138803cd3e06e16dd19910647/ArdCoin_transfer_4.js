const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ArdCoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ArdCoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("ARDX","ArdCoin","5158308000","2");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xB6e28901415E6145CB31FE1437714F3d9166bD47","0x030920ec");
		});
	});
});