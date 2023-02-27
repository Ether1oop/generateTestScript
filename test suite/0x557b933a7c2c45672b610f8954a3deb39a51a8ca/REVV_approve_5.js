const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("REVV",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("REVV");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy(["0x6cDa3Bb72b9F4Ad691b05Cab5Aa904A0FbB9e7d5","0x59c6A2F6dc758Dc5C5567733cBB49dA7FDde3cBB","0x8ec76b0099cBDc48bD19c57a263a0B527aE74890","0x2d8ECD9Ee7A5fDF2FD78634Ce413601b0357DB19","0xa412fdA7d40cAb0256d4054ae4e169457764Dd2e","0x80b12BD0F1793BF6CEa767Fa83Eb2068eaa17DC8","0x660b19a931713f4AD646Ca1c008DEa900E1bf9CF","0x8537aF398F15321f0e000e4f30978D0Eb821530a"],["900000000000000000000000000","900000000000000000000000000","300000000000000000000000000","200000000000000000000000000","273946700000000000000000000","6053300000000000000000000","20000000000000000000000000","400000000000000000000000000"]);
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x881D40237659C251811CEC9c364ef91dC08D300C","0x00");
		});
	});
});