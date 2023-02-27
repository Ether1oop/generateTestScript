const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LITToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LITToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xB5Fb12f19fEe6E320dfA813959614D42cF603339","0x02a1adf93d42792000");
		});
	});
});