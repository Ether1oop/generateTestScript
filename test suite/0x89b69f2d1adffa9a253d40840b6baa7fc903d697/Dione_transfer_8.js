const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dione",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dione");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xCA5136f590EB2DF5377fE55ac03ac9e04F703150","0x0386258a37792e");
		});
	});
});