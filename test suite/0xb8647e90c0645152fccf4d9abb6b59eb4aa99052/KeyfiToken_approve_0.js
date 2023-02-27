const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KeyfiToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KeyfiToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xFdb6ac6750690D9c46d038f2536eC995D9d3D6d8","0x0000000000000000000000000000000000000000","1654689600");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1a9b2708b76E55354146576AD0A7e46CF7E8abbC","0x5150ae84a8cdf01a39");
		});
	});
});