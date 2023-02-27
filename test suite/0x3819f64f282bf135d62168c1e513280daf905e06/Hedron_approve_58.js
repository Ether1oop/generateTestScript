const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Hedron",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Hedron");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39","1575331200");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xdE032D65369e88553718d7bC3d0a85C13B008649","0x016345785d8a0000");
		});
	});
});