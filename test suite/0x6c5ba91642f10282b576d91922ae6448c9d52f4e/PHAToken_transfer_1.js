const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PHAToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PHAToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x05f876Db7a35CC2b58343901841D9581c80648Bf","0xc72afe0e5051280000");
		});
	});
});