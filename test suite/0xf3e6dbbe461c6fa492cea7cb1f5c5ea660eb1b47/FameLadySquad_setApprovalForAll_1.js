const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FameLadySquad",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FameLadySquad");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("FameLadySquad","FLS","https://nft-1.mypinata.cloud/ipfs/QmdzpuJMbeGYB1AXiXXSKE4eifASTDLyVPBnjxCTiVUp7p/");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x03800ba48DBD5a470e6Daa92Ef5786adD2cdd567",0);
		});
	});
});