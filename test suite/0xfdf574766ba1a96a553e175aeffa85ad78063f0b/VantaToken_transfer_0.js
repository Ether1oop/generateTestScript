const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("VantaToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("VantaToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x30741289523c2e4d2A62c7D6722686D14E723851","0x27d2dc87dcd207b80000");
		});
	});
});