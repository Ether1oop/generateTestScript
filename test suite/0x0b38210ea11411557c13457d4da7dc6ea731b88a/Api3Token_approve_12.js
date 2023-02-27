const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Api3Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Api3Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xe7aF7c5982e073aC6525a34821fe1B3e8E432099","0x24dd2870B2A1986F58B495848606Ed93270eC6FB");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});