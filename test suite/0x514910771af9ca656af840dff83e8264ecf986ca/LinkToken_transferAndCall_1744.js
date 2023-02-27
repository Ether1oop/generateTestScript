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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x031abd56ea0fc50000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000128aadbefcf2533639956b649892e6d40a5284070128261309c1bce229b90241c9889d1f03011de0b393407b8929fcea81922030a5e127b1af9355d70537845afea1c8c8a5987166eb2438a200d9b52aac0f5d1cf9442f4cf512d645e73733a01e8bb7ff6a0c9ae29212b736d5708fba05e0f1e868dae1a603a715ce2612226c19ffc4729b8d6af120850a355eaf12f5ccae3abf9f686e97b2a15e9d08cdad2d3e7f670c9764bafa8de043808fbde2913f3b90353319e802cb76e94d43409d7cfc7d20166e06af6f3eb05141ce1597c83d73b05cce971bf692190d17d7c52373e053964079a713598358097395e432f37c6f3fefe95d3b89ae08054fa0ed55af3186ad6f079e02f8a30904004d0acc9542ce1ec00a6e9f93175a40210bdc08bc49ceebbaede3d0ee511100856a3e1cfe5af4d80711b1a572dc91d51115a02abc720649baa706f27eb5a65ac5e1c461c2684ce3070d2cb960d880f1ed295e9bc2ce439da2bf47fdeff2152d416cebcb993deb219c74714afe6da027006b2dfa133035438e74d0b4128ed3eb25770269d08a310f938e1c184fbe89fa536274b9d1937b496543df627f7595b9029f333ab8178c836b17b9a88ccbfa928575ce043de9cfd61e0715278c0a1de0d6926b3ba11b1656840f1834493ba4228146a288b318e3879df8b2d6096ec0846fbcb2edf48f8373d0e162630899e81cb563d937826317559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});