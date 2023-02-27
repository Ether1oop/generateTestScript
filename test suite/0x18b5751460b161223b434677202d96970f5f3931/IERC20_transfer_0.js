const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("IERC20",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("IERC20");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3E0A27bf153fDF7192113AA380De08FE560424AA","0x0317325024603a2c0000");
		});
	});
});