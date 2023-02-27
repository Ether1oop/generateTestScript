const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SmoothLovePotion",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SmoothLovePotion");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x1A2a1c938CE3eC39b6D47113c7955bAa9DD454F2");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x8Ab399CBB9FDB9a36518a7e7EddF89158E56c595","0x12725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f21");
		});
	});
});