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
			await _contract.connect(account0).transfer("0x72E5263FF33D2494692D7F94A758aA9F82062F73","0x05039e961d6684740000");
		});
	});
});