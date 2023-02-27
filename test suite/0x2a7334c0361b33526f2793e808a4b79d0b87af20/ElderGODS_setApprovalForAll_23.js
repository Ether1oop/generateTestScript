const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ElderGODS",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ElderGODS");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("InfiniGods: Elder Gods","GODS","0x7B9e0e62e3798ffB33326421A7D203ffD60b711C");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x00000000000111AbE46ff893f3B2fdF1F759a8A8",1);
		});
	});
});