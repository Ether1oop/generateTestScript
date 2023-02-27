const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BPTCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BPTCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xa7e45Dc19Cb3D5931d24FF37F462E82adF13c3F4","0x361032d200");
		});
	});
});