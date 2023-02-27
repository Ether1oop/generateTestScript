const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ElementToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ElementToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Everest ID","ID","800000000","18");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xc2c55b9cf2067218ad85298c7dFBc157799Ef09B","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});