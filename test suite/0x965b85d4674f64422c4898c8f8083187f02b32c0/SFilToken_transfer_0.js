const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SFilToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SFilToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("200000000000000","FileCoin standard Full hashrate Token","SFIL","8");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x75021F8C16889251f3f1A43cfa6404E54eB119A6","0x0490b3d208");
		});
	});
});