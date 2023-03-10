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
			await _contract.connect(account0).f(["0x0a75","0x0a76","0x0a77","0x0a78","0x0a79","0x0a7a","0x0a7b","0x0a7c","0x0a7d","0x0a7e","0x0a7f","0x0a80","0x0a81","0x0a82","0x0a83","0x0a84","0x0a85","0x0a86","0x0a87","0x0a88","0x0a89","0x0a8a","0x0a8b","0x0a8c","0x0a8d","0x0a8e","0x0a8f","0x0a90","0x0a91","0x0a92","0x0a93","0x0a94","0x0a95","0x0a96","0x0a97","0x0a98","0x0a99","0x0a9a","0x0a9b","0x0a9c","0x0a9d","0x0a9e","0x0a9f","0x0aa0","0x0aa1","0x0aa2","0x0aa3","0x0aa4","0x0aa5","0x0aa6","0x0aa7","0x0aa8","0x0aa9","0x0aaa","0x0aab","0x0aac","0x0aad","0x0aae","0x0aaf","0x0ab0","0x0ab1","0x0ab2","0x0ab3","0x0ab4","0x0ab5","0x0ab6","0x0ab7","0x0ab8","0x0ab9","0x0aba","0x0abb","0x0abc","0x0abd","0x0abe","0x0abf","0x0ac0","0x0ac1","0x0ac2","0x0ac3","0x0ac4","0x0ac5","0x0ac6","0x0ac7","0x0ac8","0x0ac9","0x0aca","0x0acb","0x0acc","0x0acd","0x0ace","0x0acf","0x0ad0","0x0ad1","0x0ad2","0x0ad3","0x0ad4","0x0ad5","0x0ad6","0x0ad7","0x0ad8","0x0ad9","0x0ada","0x0adb","0x0adc","0x0add","0x0ade","0x0adf","0x0ae0","0x0ae1","0x0ae2","0x0ae3","0x0ae4","0x0ae5","0x0ae6","0x0ae7","0x0ae8","0x0ae9","0x0aea","0x0aeb","0x0aec","0x0aed","0x0aee","0x0aef","0x0af0","0x0af1","0x0af2","0x0af3","0x0af4"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});