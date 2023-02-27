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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x056bc75e2d63100000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000125b61489e5d608a0fe3bb65014e896fb9a576301f5f93a062b64ffee871bcdc902920be9d3526e5a9a06cdf4fa6d38d430c465b7295aae5b4caf5a746f0a24dc38ad292982d4012c953a47b2207e0fcf61de96fefe85db853d67f033eabf94c59d060bc0a7aea231f3633212977bf890bc340669b15ae5c416ead0c3cc3efd4f088c1b96a3b44250a2b1f401ada0da0819147152988817e970b2f34fd6dbd362e167e8dd9b469743c07d47f30dfc872b10e9c58ae1e852f6719df5e3ff3aa7e3a2f3d676ba161528a994ebb154395f3d3d09367c38fc2791895cd202c34dcf4aeaa59fb733c1e82fdc52534dc16041dd37c5dd78eb68b4e346552d6defafc22dcd1795cb5d3e8e767a56b8659d762f43f592092f0c12a8a8ad54229b6d027083358956afe86e09ad5994ec0f63fbeebca1fef0d60c093068f9ab66a187c30bb26428955253d423922901891cb0a4e73029044ff19fe8db4ab370999cbf037669bf668b7de80d1444b1e6b53526c4c32699f71f2f9e5af0b7f8f1baf8e6e3c944e10f4521e6f0f25bf1dd99f275f6bcfac85968d19e6c5e927e556e974e514af6fefea416ed4ab54025eca71e63ce01c72febecdfe5242643f00febd51d1175cfccfd61e0715278c0a1de0d6926b3ba11b1656840f1834493ba4228146a288b318e3879df8b2d6096ec0846fbcb2edf48f8373d0e162630899e81cb563d937826317559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});