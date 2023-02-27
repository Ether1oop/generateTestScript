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
			await _contract.connect(account0).f(["0x0c75","0x0c76","0x0c77","0x0c78","0x0c79","0x0c7a","0x0c7b","0x0c7c","0x0c7d","0x0c7e","0x0c7f","0x0c80","0x0c81","0x0c82","0x0c83","0x0c84","0x0c85","0x0c86","0x0c87","0x0c88","0x0c89","0x0c8a","0x0c8b","0x0c8c","0x0c8d","0x0c8e","0x0c8f","0x0c90","0x0c91","0x0c92","0x0c93","0x0c94","0x0c95","0x0c96","0x0c97","0x0c98","0x0c99","0x0c9a","0x0c9b","0x0c9c","0x0c9d","0x0c9e","0x0c9f","0x0ca0","0x0ca1","0x0ca2","0x0ca3","0x0ca4","0x0ca5","0x0ca6","0x0ca7","0x0ca8","0x0ca9","0x0caa","0x0cab","0x0cac","0x0cad","0x0cae","0x0caf","0x0cb0","0x0cb1","0x0cb2","0x0cb3","0x0cb4","0x0cb5","0x0cb6","0x0cb7","0x0cb8","0x0cb9","0x0cba","0x0cbb","0x0cbc","0x0cbd","0x0cbe","0x0cbf","0x0cc0","0x0cc1","0x0cc2","0x0cc3","0x0cc4","0x0cc5","0x0cc6","0x0cc7","0x0cc8","0x0cc9","0x0cca","0x0ccb","0x0ccc","0x0ccd","0x0cce","0x0ccf","0x0cd0","0x0cd1","0x0cd2","0x0cd3","0x0cd4","0x0cd5","0x0cd6","0x0cd7","0x0cd8","0x0cd9","0x0cda","0x0cdb","0x0cdc","0x0cdd","0x0cde","0x0cdf","0x0ce0","0x0ce1","0x0ce2","0x0ce3","0x0ce4","0x0ce5","0x0ce6","0x0ce7","0x0ce8","0x0ce9","0x0cea","0x0ceb","0x0cec","0x0ced","0x0cee","0x0cef","0x0cf0","0x0cf1","0x0cf2","0x0cf3","0x0cf4"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});