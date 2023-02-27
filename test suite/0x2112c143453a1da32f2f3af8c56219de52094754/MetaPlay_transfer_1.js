const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MetaPlay",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MetaPlay");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xef18CA0682ADeD83627a7FE483e1ea4b931ADD5f","0x4e98d73be0d8ddf00000");
		});
	});
});