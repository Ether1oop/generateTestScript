const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinTool_App",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinTool_App");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("f",function(){
		it("testing f",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).f(["0x0117","0x0118","0x0119","0x011a","0x011b","0x011c","0x011d","0x011e","0x011f","0x0120","0x0121","0x0122","0x0123","0x0124","0x0125","0x0126","0x0127","0x0128","0x0129","0x012a","0x012b","0x012c","0x012d","0x012e","0x012f"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});