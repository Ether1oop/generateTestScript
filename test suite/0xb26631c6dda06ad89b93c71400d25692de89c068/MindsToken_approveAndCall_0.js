const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MindsToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MindsToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approveAndCall",function(){
		it("testing approveAndCall",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approveAndCall("0x4B637bbA81D24657D4c6ACC173275f3e11a8D5D7","0x878678326eac900000","0x000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000400000000000000000000000006f2548b1bee178a49c8ea09be6845f6aeaf3e8da");
		});
	});
});