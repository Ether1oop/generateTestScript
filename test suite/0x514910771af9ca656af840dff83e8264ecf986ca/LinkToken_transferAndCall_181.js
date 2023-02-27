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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x0ecca2d59581a40000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000123a29b27dc64e67d730495958f2c7f0c2b646c40c085bf43f3a7164e141c7c92c52a0ed6758630b8fcf38558123df2f2bc15bde983ba580a2879074ad4439ebbefb7c555e561a1b585b184db538ddf4bf9354cda335eca407fab1bd25f97543d949ca23e8df0e8a8b91480f7ae6b8c35ba29acd855d6fb68fdd1475668fab9bc77d290a5643eb7cdeb9e9a251e31186f41144c8e5fffd87a60f5a689a894c46562288d813fede07552b40b4fee8ea548de15afab1f0dfef303b87b22bb5fc2375328b9db7fada833923a6dcbabb3f698973559423bc331aa9ff978c8f9f0ea72e5693bd34b11982234264aa240f51bf721ffbf6ede36ce06ef0d8b48411f0094c7e8dc6192c2bf2bbf18486e10579f019a73a974e18b0b685b93f79eb12f2c306fa96394dc8a0f4f97999aac75aebc72c258b6c744e9cedde90b8761233109ee638d3511560ff6652d14b6d0bfe546f5d1e04524d9d80e6b5b279bf32711484f99e436d523de1987fe2fe219d6d598fa46bbd96ee3a40a60e4d05817bfdfa81a710a23bc3b2f5a75eb9ef0a82a69b2a9dfd0c4b1d31aba399434be7087778f55fc5776f4b0ec98639d8907d73295b983bdc1aeecbaa4147e4a274a03988e617885355feca1cb8c746c8376b07675419933078433e4659308976c904000dcff4b032b0589380d3994681ce4fa258d28ffd0671e0a283694c7560927029e566591517559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});