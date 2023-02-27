const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Leaxcoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Leaxcoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x1C773fda15e22570D467066Bb9Df399dE3D2576f","0x1f3002b5e66a43dc0000");
		});
	});
});