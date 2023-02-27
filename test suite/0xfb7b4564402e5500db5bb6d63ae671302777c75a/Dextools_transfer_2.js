const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dextools",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dextools");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6a66ce94d967240B8A0548c7398e597B8da5EBF8","0x912ee222ef67c88400");
		});
	});
});