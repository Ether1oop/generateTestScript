const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NFTgurus",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NFTgurus");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("https://gateway.pinata.cloud/ipfs/QmZnt4wEpNMZdNt1iQcNRMBNZsvEr9DHUHnqd77jXkDuR2/","0x41482597Cb31994681e395655530A859248B4F9C");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});