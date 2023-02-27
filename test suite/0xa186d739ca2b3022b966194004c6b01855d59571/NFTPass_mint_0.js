const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NFTPass",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NFTPass");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("NFTPass","ATTPASS","https://metadata.atticc.xyz/");
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0xB67812ce508b9fC190740871032237C24b6896A0","0x00","0","0x01");
		});
	});
});