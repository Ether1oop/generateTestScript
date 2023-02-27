const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Voxel",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Voxel");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xF86Df701D82ae9dAC37EE35D2A3C20260D19a093","0x13d74b168195840384b0");
		});
	});
});