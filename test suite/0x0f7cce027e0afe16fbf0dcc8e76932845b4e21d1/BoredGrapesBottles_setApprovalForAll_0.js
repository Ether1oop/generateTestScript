const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BoredGrapesBottles",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BoredGrapesBottles");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x4205d5AE579e9708b49347580e9e780f78001285","0x5Cf769F252d4BcD973e025b9e074f5E45A7ba123","ipfs://bafybeich7mwrpux3t3y2w6xyhufgegs3o3azrtxcshx22uzqy2g6w4ez3q/");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});