const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ERC20",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ERC20");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0D0707963952f2fBA59dD06f2b425ace40b492Fe","0x0239f03710b44554c000");
		});
	});
});