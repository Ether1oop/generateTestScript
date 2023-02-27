const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AnyswapV6ERC20",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AnyswapV6ERC20");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("ApeSwapFinance Banana","BANANA","18","0x0000000000000000000000000000000000000000","0xfA9dA51631268A30Ec3DDd1CcBf46c65FAD99251");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x5f509a3C3F16dF2Fba7bF84dEE1eFbce6BB85587","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});