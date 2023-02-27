const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Leaxcoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Leaxcoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x25F4099978F05BF42695eE9917898dF4e461eab4","0x372782bc11133acc0000");
		});
	});
});