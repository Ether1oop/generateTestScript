const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MASToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MASToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("500000000","Mas Oyama Coin","MAS");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xBC8022b1940Ed1158CbD077FCFE7F7A877245868","0xa2fb405800");
		});
	});
});