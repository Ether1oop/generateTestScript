const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Re_Genz",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Re_Genz");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Regenz","REGENZ","3333","0xfb9e9e7150cCebFe42D58de1989C5283d0EAAB2e");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});