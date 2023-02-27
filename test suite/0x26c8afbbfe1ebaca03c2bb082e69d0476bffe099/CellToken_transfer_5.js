const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CellToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CellToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Cellframe Token","CELL","30300000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xA1f84445b9dB1b3FcbA6aFfe420B7f968495510F","0x02b5e3af16b1880000");
		});
	});
});