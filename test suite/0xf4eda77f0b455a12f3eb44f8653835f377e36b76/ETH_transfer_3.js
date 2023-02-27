const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ETH",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ETH");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2De0f49D135e4877495f07Ef89fAEbbbb2884866","0xe8d4a51000");
		});
	});
});