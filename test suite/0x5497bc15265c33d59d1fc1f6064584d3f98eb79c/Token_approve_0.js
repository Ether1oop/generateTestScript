const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("140000000000000000000000000","0x0000000000000000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xCAc96B0f10377ac7e112ABFA79F815FB29Be988A","0x04eb60ac35708853e66c7e1ea000000000");
		});
	});
});