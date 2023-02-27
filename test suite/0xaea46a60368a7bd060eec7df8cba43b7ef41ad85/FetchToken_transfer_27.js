const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FetchToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FetchToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Fetch","FET","1152997575000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3B59a023D74ACECA4b10b134fD218f887fa0eC1b","0x65f54cc8ec6fc3b00000");
		});
	});
});