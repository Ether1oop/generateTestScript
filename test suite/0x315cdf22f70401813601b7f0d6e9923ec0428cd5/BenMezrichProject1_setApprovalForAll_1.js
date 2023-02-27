const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BenMezrichProject1",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BenMezrichProject1");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("https://gateway.pinata.cloud/ipfs/QmWHqNF6j8myJQ7B2G7i2L1fqi1U3MLSdsomdKkzYxdGHF/","0xfe4bcA1F6Cb50e63D6ac7eFD1878e3D9110a8Dde");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});