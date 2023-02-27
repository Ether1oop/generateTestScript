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
			await _contract.connect(account0).f(["0x0130","0x0131","0x0132","0x0133","0x0134","0x0135","0x0136","0x0137","0x0138","0x0139","0x013a","0x013b","0x013c","0x013d","0x013e","0x013f","0x0140","0x0141","0x0142","0x0143","0x0144","0x0145","0x0146","0x0147","0x0148"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});