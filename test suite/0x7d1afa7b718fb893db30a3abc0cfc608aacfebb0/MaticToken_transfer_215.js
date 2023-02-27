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

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x26cA72006519d39394A8a10988efbD6845C2003a","0x367c8a4cdd075de800");
		});
	});
});