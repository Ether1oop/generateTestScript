const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XoloNFT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XoloNFT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy(1647111599,1648321200,"0x1A263F200C1fe51b1Ab5F0bc5D4144F69B957fC7");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});