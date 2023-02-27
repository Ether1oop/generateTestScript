const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Erc20SwapAsset",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Erc20SwapAsset");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Fusion","anyFSN","18");
		return {_contract,account0,account1,account2};
	}

	describe("Swapin",function(){
		it("testing Swapin",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).Swapin("0x8a96af069442c6c1baae8b1e1bbb14b229fd2043738913d93ec58c730ff45322","0xd74dbF3df8e12f53DB7aFe8FD391D50933BE3Ec5","0x4563918244f40000");
		});
	});
});