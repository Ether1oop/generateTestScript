const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Bad_Guys_by_RPF",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Bad_Guys_by_RPF");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x3b86af6a9a1650adef259a1338316fa8c13661ea9d0dcf08a69e97f958d20077","https://wof.mypinata.cloud/ipfs/QmNvLrT3jodp8Ug8eHQWo3RzmKZ5etqVV2s5yEfEmdBemG");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});