const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BitgetToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BitgetToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("2000000000000000000000000000","BitgetToken","BGB","18");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x53742Ab36D868c4C99A00E1237F48F85CA28140f","0x1b73cad00c0d828000");
		});
	});
});