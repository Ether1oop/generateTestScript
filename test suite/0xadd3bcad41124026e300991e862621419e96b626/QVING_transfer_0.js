const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("QVING",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("QVING");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xA102Fb084355DD955b2fEFDc30c52755dC71cFe2","0x010f0cf064dd59200000");
		});
	});
});