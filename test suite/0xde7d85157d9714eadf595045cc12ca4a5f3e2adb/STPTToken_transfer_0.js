const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("STPTToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("STPTToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xD7B5E88b77f69f3Db5Bd01FfB11D438c39C396aA","0x1c4b24695513dcd400");
		});
	});
});