const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MaticToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MaticToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Matic Token","MATIC","18","10000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transferFrom",function(){
		it("testing transferFrom",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferFrom("0xAA9b8e593Fd2302682efF50d996D0BaF2bA2eEb8","0x1689a089AA12d6CbBd88bC2755E4c192f8702000","0x8563b7181220ad8000");
		});
	});
});