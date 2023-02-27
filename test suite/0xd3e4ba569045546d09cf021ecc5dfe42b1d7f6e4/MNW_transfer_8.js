const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MNW",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MNW");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0cCC871AE49507f5Feb2C129B0248B9a27b38a7a","0x030927f74c9de00000");
		});
	});
});