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
			await _contract.connect(account0).f(["0x012d","0x012e","0x012f","0x0130","0x0131","0x0132","0x0133","0x0134","0x0135","0x0136","0x0137","0x0138","0x0139","0x013a","0x013b","0x013c","0x013d","0x013e","0x013f","0x0140","0x0141","0x0142","0x0143","0x0144","0x0145","0x0146","0x0147","0x0148","0x0149","0x014a","0x014b","0x014c","0x014d","0x014e","0x014f","0x0150","0x0151","0x0152","0x0153","0x0154","0x0155","0x0156","0x0157","0x0158","0x0159","0x015a","0x015b","0x015c","0x015d","0x015e","0x015f","0x0160","0x0161","0x0162","0x0163","0x0164","0x0165","0x0166","0x0167","0x0168","0x0169","0x016a","0x016b","0x016c","0x016d","0x016e","0x016f","0x0170","0x0171","0x0172","0x0173","0x0174","0x0175","0x0176","0x0177","0x0178","0x0179","0x017a","0x017b","0x017c","0x017d","0x017e","0x017f","0x0180","0x0181","0x0182","0x0183","0x0184","0x0185","0x0186","0x0187","0x0188","0x0189","0x018a","0x018b","0x018c","0x018d","0x018e","0x018f","0x0190"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000441c560305000000000000000000000000a9bbaf9bb69896fec7210a2b5e825046144a8e66000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});