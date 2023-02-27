const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MembershipToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MembershipToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("https://ipfs.io/ipfs/QmfYgkx7oYsY8txRXXaaZnGNAHAwsGPHo4EdTnkuRyoPf5","0xdC463F26272D2FE8758D8072BA498B16A30AaaC2","0x7cF196415CDD1eF08ca2358a8282D33Ba089B9f3","0x58F32C2ed82556aa3aA17fF1B31E833BE77AfDfe","100000000000000000","5554","0xdC463F26272D2FE8758D8072BA498B16A30AaaC2","23");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});