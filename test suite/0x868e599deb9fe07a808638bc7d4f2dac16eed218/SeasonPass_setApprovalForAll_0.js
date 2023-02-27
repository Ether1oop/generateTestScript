const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SeasonPass",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SeasonPass");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy(["0x00b7327099300682E0B5562e3be7Ce226e6F17F5","0x72eD814ddc5F44510EB00cA8Da3552B0BAd6f69a"],["90","10"],"10");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});