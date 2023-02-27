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
			await _contract.connect(account0).f(["0x1bae","0x1baf","0x1bb0","0x1bb1","0x1bb2","0x1bb3","0x1bb4","0x1bb5","0x1bb6","0x1bb7","0x1bb8","0x1bb9","0x1bba","0x1bbb","0x1bbc","0x1bbd","0x1bbe","0x1bbf","0x1bc0","0x1bc1","0x1bc2","0x1bc3","0x1bc4","0x1bc5","0x1bc6","0x1bc7","0x1bc8","0x1bc9","0x1bca","0x1bcb","0x1bcc","0x1bcd","0x1bce","0x1bcf","0x1bd0","0x1bd1","0x1bd2","0x1bd3","0x1bd4","0x1bd5","0x1bd6","0x1bd7","0x1bd8","0x1bd9","0x1bda","0x1bdb","0x1bdc","0x1bdd","0x1bde","0x1bdf","0x1be0","0x1be1","0x1be2","0x1be3","0x1be4","0x1be5","0x1be6","0x1be7","0x1be8","0x1be9","0x1bea","0x1beb","0x1bec","0x1bed","0x1bee","0x1bef","0x1bf0","0x1bf1","0x1bf2","0x1bf3","0x1bf4","0x1bf5","0x1bf6","0x1bf7","0x1bf8","0x1bf9","0x1bfa","0x1bfb","0x1bfc","0x1bfd","0x1bfe","0x1bff","0x1c00","0x1c01","0x1c02","0x1c03","0x1c04","0x1c05","0x1c06","0x1c07","0x1c08","0x1c09","0x1c0a","0x1c0b","0x1c0c","0x1c0d","0x1c0e","0x1c0f","0x1c10","0x1c11"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000441c560305000000000000000000000000b5b3f3f443fe3c1a42b6507ae211df69ac40c8d9000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});