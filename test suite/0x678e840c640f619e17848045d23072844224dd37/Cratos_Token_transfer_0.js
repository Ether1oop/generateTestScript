const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Cratos_Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Cratos_Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x62B9171286feeE2758f3C270640600ba3E37c1f6","0xaaa3bc70fa5b16fe0000");
		});
	});
});