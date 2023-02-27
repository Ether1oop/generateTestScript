const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AnyswapV6ERC20",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AnyswapV6ERC20");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Dogechain Token","DC","18","0x0000000000000000000000000000000000000000","0xfE3d319aaD1Be56E7B82e897CD129c4c2C8388Dc");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});