const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RaribleUserToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RaribleUserToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("TOPG","TOPG","https://nft.topg.com/","ipfs:/ ","0x0369D03aabfbA6923a491A85070BA4168E3cf3A8","0x2bf031a74d71ee56Fbc60F5Aa3167A6B6A8F932A");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});