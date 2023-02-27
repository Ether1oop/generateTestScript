const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ERC20",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ERC20");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("MetaVisa","MESA","10000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x1614Da331A6DEbFB37bafb18da603a32e9afe0D2","0x06938b2946d9dbaec000");
		});
	});
});