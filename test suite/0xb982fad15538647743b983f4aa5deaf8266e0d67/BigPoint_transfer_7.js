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
			await _contract.connect(account0).transfer("0xa8eE744f09a44a459Dd256875A3C417c7472B045","0x018b84570022a20000");
		});
	});
});