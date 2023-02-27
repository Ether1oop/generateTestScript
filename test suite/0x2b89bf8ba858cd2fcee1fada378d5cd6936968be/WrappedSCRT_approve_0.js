const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WrappedSCRT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WrappedSCRT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xf4B00C937b4ec4Bb5AC051c3c719036c668a31EC");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xe66B31678d6C16E9ebf358268a790B763C133750","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});