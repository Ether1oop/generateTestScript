const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("GenArt721",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("GenArt721");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Art Blocks","BLOCKS");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xbe6AB72Dc5e56277F679d6E2A4158124a4DDaF65",0);
		});
	});
});