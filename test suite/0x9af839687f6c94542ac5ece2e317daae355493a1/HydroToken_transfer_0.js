const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HydroToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HydroToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3C474e12452ea3CBa1DC80Dbef414033471d838C","0x3fa3fa93cfc560996800");
		});
	});
});