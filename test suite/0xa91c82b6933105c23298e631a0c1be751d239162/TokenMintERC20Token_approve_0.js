const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TokenMintERC20Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TokenMintERC20Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("OsterreichischerSchilling","OES","2","695000000000","0x6603cb70464ca51481d4edBb3B927F66F53F4f42","0xb9cF463f207aC101c64Ac844938c8800e360eEc1");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x617Dee16B86534a5d792A4d7A62FB491B544111E","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});