const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dragon",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dragon");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x7633cE756070864Bc638D38ef831CFbb94Fd4477","0x033f7ba4de40c9885778");
		});
	});
});