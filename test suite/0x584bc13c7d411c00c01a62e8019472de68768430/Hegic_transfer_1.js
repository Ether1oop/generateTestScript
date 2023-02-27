const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Hegic",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Hegic");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x022fb7fF75917BD783F38F1236EB021301626f7f","0x1958f3335a3831d00000");
		});
	});
});