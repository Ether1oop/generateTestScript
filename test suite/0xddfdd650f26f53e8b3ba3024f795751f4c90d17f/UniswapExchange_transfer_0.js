const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UniswapExchange",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UniswapExchange");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("President Trump","Trump","990000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x77328d3Ede058D9dbdf3F9a7770711557bcC79E3","0x013ef4b6a58f24655c62777f8e");
		});
	});
});