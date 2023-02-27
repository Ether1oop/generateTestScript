const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dogelon",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dogelon");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x01D655F38f05c126CC7567Ba28eaCCE145e0b404","0x34e812123e781af7640000");
		});
	});
});