const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TokenMintERC20Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TokenMintERC20Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1Step finance","STEP","8","2000000000000000","0xB65E47AECC0FA53b3Ecf807c38217FC0259Cb892","0x558e898C122dBDB2B699547737c0230140caEe63");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x2409aF0251DCB89EE3Dee572629291f9B087c668","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});