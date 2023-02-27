const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BitgetToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BitgetToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("2000000000000000000000000000","BitgetToken","BGB","18");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xa646A6A9c69F48dE1fca13cdB4a73B7B83592e4a","0xaa47cbfda20b0000");
		});
	});
});