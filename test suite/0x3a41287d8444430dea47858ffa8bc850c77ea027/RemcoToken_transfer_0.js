const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RemcoToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RemcoToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Remittance Token","Remco","300000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xA4D44212536d750C2A87e842C88373534F923536","0x05f5e100");
		});
	});
});