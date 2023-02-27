const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TRIX",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TRIX");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x32c4a89f89086E5bDB64018430a87d98359D16e9","0x02f3710d13c3f16a0cd800");
		});
	});
});