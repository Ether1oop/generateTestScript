const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BYTESContract",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BYTESContract");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x24A895080f54103e907292a8158c7FAE44d55dEe","0x056bc75e2d63100000");
		});
	});
});