const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MNW",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MNW");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xf5FEed0363860649b06111A0553f2D044122DBEB","0x140414904a9c3a4000");
		});
	});
});