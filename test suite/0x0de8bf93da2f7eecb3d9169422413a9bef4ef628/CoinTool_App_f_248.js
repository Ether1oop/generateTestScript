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
			await _contract.connect(account0).f(["0xc9","0xca","0xcb","0xcc","0xcd","0xce","0xcf","0xd0","0xd1","0xd2","0xd3","0xd4","0xd5","0xd6","0xd7","0xd8","0xd9","0xda","0xdb","0xdc","0xdd","0xde","0xdf","0xe0","0xe1","0xe2","0xe3","0xe4","0xe5","0xe6","0xe7","0xe8","0xe9","0xea","0xeb","0xec","0xed","0xee","0xef","0xf0","0xf1","0xf2","0xf3","0xf4","0xf5","0xf6","0xf7","0xf8","0xf9","0xfa","0xfb","0xfc","0xfd","0xfe","0xff","0x0100","0x0101","0x0102","0x0103","0x0104","0x0105","0x0106","0x0107","0x0108","0x0109","0x010a","0x010b","0x010c","0x010d","0x010e","0x010f","0x0110","0x0111","0x0112","0x0113","0x0114","0x0115","0x0116","0x0117","0x0118","0x0119","0x011a","0x011b","0x011c","0x011d","0x011e","0x011f","0x0120","0x0121","0x0122","0x0123","0x0124","0x0125","0x0126","0x0127","0x0128","0x0129","0x012a","0x012b","0x012c"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000002d00000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});