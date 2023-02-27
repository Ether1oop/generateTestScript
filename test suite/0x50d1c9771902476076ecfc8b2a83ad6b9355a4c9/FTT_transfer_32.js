const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FTT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FTT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x63A82aee0A11414f35D87b8b392b54Feae0d9369","0x017a652de986fea00000");
		});
	});
});