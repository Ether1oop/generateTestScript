const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ideaology",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ideaology");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x790B2491F2298C6DdB497Ed2CBc01D5A29343d83","0x05039e961d6684740000");
		});
	});
});