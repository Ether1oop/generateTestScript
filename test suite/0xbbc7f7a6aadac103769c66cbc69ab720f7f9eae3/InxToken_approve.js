const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("InxToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("InxToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xe0f92Fb0d2634a5f814158EaeCBDD752EbDAC282");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x5eE36f573F0E543f905796C0E697caA7E984E0c8","0xd3c21bcecceda1000000");
		});
	});
});