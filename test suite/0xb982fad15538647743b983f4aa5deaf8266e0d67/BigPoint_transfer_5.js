const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BigPoint",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BigPoint");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x08060e9A4213874a2ec44E97d64f61C23b84afB1","0x10ce1d3d8cb3180000");
		});
	});
});