const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("GOPHERTOKEN",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("GOPHERTOKEN");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x15965e2997B9a9271D6AC3036fa30B0F832b97b4","0x148a04289b940000");
		});
	});
});