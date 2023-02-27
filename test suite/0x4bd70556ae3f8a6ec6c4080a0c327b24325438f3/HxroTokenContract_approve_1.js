const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HxroTokenContract",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HxroTokenContract");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1575000000","Hxro","HXRO","18","325000000");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x3ee18B2214AFF97000D974cf647E7C347E8fa585","0x025d0b5f57bf6253db3b");
		});
	});
});