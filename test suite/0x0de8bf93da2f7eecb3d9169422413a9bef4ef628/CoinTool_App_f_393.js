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
			await _contract.connect(account0).f(["0x0162","0x0163","0x0164","0x0165","0x0166","0x0167","0x0168","0x0169","0x016a","0x016b","0x016c","0x016d","0x016e","0x016f","0x0170","0x0171","0x0172","0x0173","0x0174","0x0175","0x0176","0x0177","0x0178","0x0179","0x017a"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});