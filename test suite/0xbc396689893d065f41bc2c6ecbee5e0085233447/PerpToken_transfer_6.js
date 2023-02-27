const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PerpToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PerpToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("150000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xbc337d8AEC622a498b72E634f637f2E1A92B55d7","0x235cbe45c9d13ed400");
		});
	});
});