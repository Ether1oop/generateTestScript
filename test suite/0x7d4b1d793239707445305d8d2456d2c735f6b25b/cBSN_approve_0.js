const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("cBSN",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("cBSN");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("BSNcommunitynet","cBSN","0x88d82C0ba4E02124FbEC7698Ce96aF46CE54fcCd");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x09783081ceA4696f728a535fcB7994C04508806c","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});