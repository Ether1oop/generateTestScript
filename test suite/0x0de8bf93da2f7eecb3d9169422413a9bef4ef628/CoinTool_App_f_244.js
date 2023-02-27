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
			await _contract.connect(account0).f(["0x014e","0x014f","0x0150","0x0151","0x0152","0x0153","0x0154","0x0155","0x0156","0x0157","0x0158","0x0159","0x015a","0x015b","0x015c","0x015d","0x015e","0x015f","0x0160","0x0161","0x0162","0x0163","0x0164","0x0165","0x0166","0x0167","0x0168","0x0169","0x016a","0x016b","0x016c","0x016d","0x016e"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000441c5603050000000000000000000000002bed984694e23c861f5516b98adf58fa4c39ef8f000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});