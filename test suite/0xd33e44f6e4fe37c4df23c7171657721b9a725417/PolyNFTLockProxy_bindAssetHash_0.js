const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PolyNFTLockProxy",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PolyNFTLockProxy");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("bindAssetHash",function(){
		it("testing bindAssetHash",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).bindAssetHash("0x31f7899B8190CF57d677DC97E627eaF4A151C224","0x08","0x00000000000000000000000000000000000010a6");
		});
	});
});