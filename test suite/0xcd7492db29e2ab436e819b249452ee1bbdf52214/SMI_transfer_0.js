const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SMI",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SMI");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2Ff1f217D31D914e617c3D48e368C4938825Fdef","0x01feddc4fb40b5");
		});
	});
});