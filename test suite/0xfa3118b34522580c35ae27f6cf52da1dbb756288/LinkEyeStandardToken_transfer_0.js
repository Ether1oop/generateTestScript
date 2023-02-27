const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LinkEyeStandardToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LinkEyeStandardToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000000000","LinkEye Token","6","LET");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6cC5F688a315f3dC28A7781717a9A798a59fDA7b","0xe76e996cc3");
		});
	});
});