const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FUSIONToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FUSIONToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("57344000000000000000000000","Test123","Test456","18");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xFeB02197e51Ab53063c4B265423211f697bCc9d2","0x9c282e2d159dbf9000");
		});
	});
});