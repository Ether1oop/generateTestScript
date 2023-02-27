const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MainframeToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MainframeToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xaf52Bb9099D1DEFDc2b0B6285FeE68AA4798477B","0x054b40b1f852bda00000");
		});
	});
});