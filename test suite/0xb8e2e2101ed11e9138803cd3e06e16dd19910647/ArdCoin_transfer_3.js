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
			await _contract.connect(account0).transfer("0xC27e50E6E0817f771ad0Ec92E235000477AB4455","0x95270f");
		});
	});
});