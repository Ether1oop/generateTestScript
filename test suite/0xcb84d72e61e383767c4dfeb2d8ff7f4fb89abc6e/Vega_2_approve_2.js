const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Vega_2",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Vega_2");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("64999723000000000000000000","1704067199","VEGA","VEGA");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1111111254EEB25477B68fb85Ed929f73A960582","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});