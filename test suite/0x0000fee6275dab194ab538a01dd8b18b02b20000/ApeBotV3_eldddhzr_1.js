const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ApeBotV3",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ApeBotV3");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("eldddhzr",function(){
		it("testing eldddhzr",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).eldddhzr(["0x00","0x115cffe9de07a120398ec7346dcd622edc5ae82352f02be94c62d119","0x00","0xfee6275dab194ab538a01dd8b18b02b20000","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","0x237ec2f5f37000","0x80","0x0180","0x20","0x0a","0x00","0x05ee872558030d40d4e6b7859681faa285687e8bcd8caaf07f4a6e5c","0x00","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","0x2386f08cf4cf00","0x00","0x80","0x00","0x0f0061a8e7462ed316f6fd3442fd3e78fde1ef745a4c87b4","0x237ec2f5f37000"]);
		});
	});
});