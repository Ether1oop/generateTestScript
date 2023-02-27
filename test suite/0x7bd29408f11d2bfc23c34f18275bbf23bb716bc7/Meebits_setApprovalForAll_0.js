const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Meebits",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Meebits");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB","0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782","0xC352B534e8b987e036A93539Fd6897F53488e56a");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});