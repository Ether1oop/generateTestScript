const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XYToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XYToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("XY Token","XY","0x4f650f98E2d24d380c3afC1247A2c338DCA8a20d","100000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x4315f344a905dC21a08189A117eFd6E1fcA37D57","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});