const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ProxySwapAsset",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ProxySwapAsset");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x4E15361FD6b4BB609Fa63C81A2be19d873717870","0x12139f3afa1C93303e1EfE3Df142039CC05C6c58");
		return {_contract,account0,account1,account2};
	}

	describe("Swapout",function(){
		it("testing Swapout",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).Swapout("0x03860e639d80640000","0x064A4887f6a19093517bfBf67F216D187378e111");
		});
	});
});