const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ERC20PresetFixedSupply",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ERC20PresetFixedSupply");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Graviton","GTON","21000000000000000000000000","0xCed486E3905F8FE1E8aF5d1791F5E7Ad7915f01a");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xeFF66B4A84C8a6b69b99EB1C5e39aF8fc35d13db","0x020231ae3075fb8b8f");
		});
	});
});