const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LinkToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LinkToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transferAndCall",function(){
		it("testing transferAndCall",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x0ad78ebc5ac6200000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012c61959d7d1c39710fa21e3c3af0afff01e992bd192c04acaf669b2d7dc6dd1f8fa9e35db192ec71d39e2d3961cbfb490862f7b6ccf74c9b611736b5cff87ac73ef76872c9da9e839a08c1e86672973714ac7c8f2ce54c52e32d356f0523e2bfb84d89c64156bef4fea768705c82bfe824ea953d47a3d3af7f0c3131fba651b2476c5fca00ff863f1307391325ba979772f35cae74855a07bcb065e1f99ead52f3eb968fa5f73180cd0b2832adae43d4175dbf6e9d6747e7e13e555d179429b72e47dcf77758a67e3d0a5463cf4955a413e9528555566120c55368f131e3df8bbce2e5a5efb228d89121e1b27b42fd9a90652ab80a07f1375be087d924e1397de653b526991a5cfa2d0bb300ad2739b69ba9c392844e035c144cd6e81587a1203b57ebd0e2aab7cb62e23e0f7ede196ab22991867d4dd458eaab5037e44bba844d29d08e610536ed07206831a69cdcebeec2439574460c481c1eb7a82c7ff2729677ff4dc4f2a6583df82d48dc55c5a09e8702e792e3ea98cdebcbab37e366393fc5c143ca9736fe90f0a4e042bb9d35cae01060d6427073f9ff079233d5358a4ba7ecd5e71499bff2e447f8152b9e784163e150c54e4315af59deb93c919000a543b4e83d6847df9b6df5e84f97b611dde166149a2458521e30077db8b20becf975865968ba748804f858d56659323cb40cded70f69b2643c4c6a34d2bb32eba94ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});