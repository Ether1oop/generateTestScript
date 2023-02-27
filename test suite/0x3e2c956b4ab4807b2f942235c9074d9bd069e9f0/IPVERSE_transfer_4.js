const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("IPVERSE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("IPVERSE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("IPVERSE","IPV");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xe8a8ED08E8818a5F67ff5aCB257DF65e7DE357Ce","0x01a5dcb365fc4166be000000");
		});
	});
});