const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TokenERC20",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TokenERC20");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("100000000000","XY Oracle","XYO");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xA9D1e08C7793af67e9d92fe308d5697FB81d3E43","0x01a784379d99db42000000");
		});
	});
});