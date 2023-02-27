const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OrigoToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OrigoToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xCD5bD47D3D1D8412b241cE9015c5032142948c12","0x103c600e49a7f9271000");
		});
	});
});