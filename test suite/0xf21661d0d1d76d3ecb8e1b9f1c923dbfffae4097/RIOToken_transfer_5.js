const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RIOToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RIOToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xDf6764F41eb550F060Aea6C852B822A49b53C6E2","0x065a4da25d3016c00000");
		});
	});
});