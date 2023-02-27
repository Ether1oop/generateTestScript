const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WadzPayToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WadzPayToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6F9B8F845AFb097d1E06BBA12a1C94594387b539","0x2e87c300618156ca0000");
		});
	});
});