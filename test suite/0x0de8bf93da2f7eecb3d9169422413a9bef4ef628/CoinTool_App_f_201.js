const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinTool_App",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinTool_App");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("f",function(){
		it("testing f",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).f(["0x1f","0x20","0x21","0x22","0x23","0x24","0x25","0x26","0x27","0x28","0x29","0x2a","0x2b","0x2c","0x2d","0x2e","0x2f","0x30","0x31","0x32","0x33","0x34","0x35","0x36","0x37","0x38","0x39","0x3a","0x3b","0x3c"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000004700000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});