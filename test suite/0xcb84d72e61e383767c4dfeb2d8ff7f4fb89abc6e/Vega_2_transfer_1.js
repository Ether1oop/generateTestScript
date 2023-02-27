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

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xf16E9B0D03470827A95CDfd0Cb8a8A3b46969B91","0x38ad5345ad2a13b040");
		});
	});
});