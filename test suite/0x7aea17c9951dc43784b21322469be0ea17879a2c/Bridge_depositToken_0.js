const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Bridge",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Bridge");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy(["0x33fE77cD35a44781fA7269AdbE57715619630737","0x062Ba2f2808376192954Ce26b72b6CCD8bD1C3BA","0x794Ba5754af7AAfee5eF796053e344d9f157D4F5"],"1");
		return {_contract,account0,account1,account2};
	}

	describe("depositToken",function(){
		it("testing depositToken",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).depositToken("0x6df241103F89983b1fB86244C8601E44ea55368C","0x0de0b6b3a7640000","1d7b4941e5792fc89e5b1fcdc28c66678e8e1c3b","cube");
		});
	});
});