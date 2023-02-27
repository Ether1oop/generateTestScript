const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RepublicToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RepublicToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transferFrom",function(){
		it("testing transferFrom",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferFrom("0xa7243f17c4ba3F379c14ddFc19c51828953F936A","0xf16E9B0D03470827A95CDfd0Cb8a8A3b46969B91","0x206ab35ce838109800");
		});
	});
});