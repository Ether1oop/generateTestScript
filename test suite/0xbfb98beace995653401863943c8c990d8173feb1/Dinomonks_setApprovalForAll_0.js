const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dinomonks",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dinomonks");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("","0x1109700E90A653e01053F7247b8b80710d8bb3BD");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});