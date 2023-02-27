const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PyroStaking",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PyroStaking");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x1e2D230C7A7F4C679Fb1378F1f51dEDeAe85Cd72");
		return {_contract,account0,account1,account2};
	}

	describe("transferOwnership",function(){
		it("testing transferOwnership",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferOwnership("0x0b5a316AE0871f70f5A9c74B2F76EF0C4C172D7E");
		});
	});
});