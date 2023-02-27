const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AVACToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AVACToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("OPENAI","OPEN AI","5","100000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x9677a279f6ff01551C38Ba3D18a239657536a248","0x3b9aca00");
		});
	});
});