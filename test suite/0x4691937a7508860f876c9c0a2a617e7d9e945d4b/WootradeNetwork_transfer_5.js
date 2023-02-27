const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WootradeNetwork",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WootradeNetwork");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("3000000000000000000000000000","Wootrade Network","18","WOO");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xB9711550ec6Dc977f26B73809A2D6791c0F0E9C8","0x034ed2682e19900d79d817");
		});
	});
});