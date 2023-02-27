const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NFTMarketplace",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NFTMarketplace");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("FlaxNFT","FNT","1000000000");
		return {_contract,account0,account1,account2};
	}

	describe("mintNFT",function(){
		it("testing mintNFT",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mintNFT("https://nowanft.com/public/uploads/nfts//1670454920_37b6dd78362565cb3f60.png");
		});
	});
});