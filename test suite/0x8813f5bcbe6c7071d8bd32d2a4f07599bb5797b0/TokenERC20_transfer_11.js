const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TokenERC20",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TokenERC20");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Ethereum Gold","ETHG");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x8cFCe8273767eD47dE2bD34aE0982Dc76CA7CAEe","0x3635c9adc5dea00000");
		});
	});
});