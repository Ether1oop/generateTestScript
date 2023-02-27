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
			await _contract.connect(account0).transfer("0x2CA99BB408f936B4BfbddA44B971Eee62851252A","0x741e38b33296b80000");
		});
	});
});