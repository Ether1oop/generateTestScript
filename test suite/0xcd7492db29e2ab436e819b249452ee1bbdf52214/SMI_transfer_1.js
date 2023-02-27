const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SMI",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SMI");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6DFF4458132D77544585EC002196683DbD0AC579","0x19dfe7e51a81c7");
		});
	});
});