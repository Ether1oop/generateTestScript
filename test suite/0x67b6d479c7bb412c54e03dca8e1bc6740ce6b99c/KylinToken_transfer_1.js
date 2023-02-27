const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KylinToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KylinToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x7F8c1B50F3D63Cd1A14094782c4826D7dc6D2B88","0x044189434b0e09978000");
		});
	});
});