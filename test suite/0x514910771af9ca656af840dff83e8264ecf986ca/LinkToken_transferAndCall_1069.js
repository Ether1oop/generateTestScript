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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x3635c9adc5dea00000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012829594ea043bef9aaa633538224f03fd6cb6a6deba10184a5e8ee338dcee1a312e5e278032afeb524c8be54a4dde46c3852b2850ae0cc06cfe0fd67c35993db09b41e40d91da5a296e172c225363caba33a24da691ea231ac8f21f7755dcb65c12126fcefee4da7bf4b064e79f073eaa3548f1faaf3cc846010813298d1f0d88cbb1ca8b72fdbcd1b6cca4e4c6ff3ff14a2f763f1acdf0f7078e6628ab0a19ba701b7ac636b3b153d73bf5411e618c9a6c14b2b28df393a84b230c459a054cd4f640cfb2555ff5d68f89c460df78da436344a64ff862f0085508999b41cf5a057cbf40e6aa7a25834b61e81d78711c2bb5589a5708d13a9549c3a3a0eef387fa8c0881fb5039dc485c99e40d25344b4fb9b2a891a9380b47b945525cc2ea1c7eada956f07cc3e9f027ea6c41a0b9750ac36011de1135b71ccb4e2f09005348f019fd8920366c1e446d8546f32e9a8ac50dc471cb2ecaff2ea981b18c231b5907f668b7de80d1444b1e6b53526c4c32699f71f2f9e5af0b7f8f1baf8e6e3c944e10f4521e6f0f25bf1dd99f275f6bcfac85968d19e6c5e927e556e974e514af6fefea416ed4ab54025eca71e63ce01c72febecdfe5242643f00febd51d1175cfccfd61e0715278c0a1de0d6926b3ba11b1656840f1834493ba4228146a288b318e3879df8b2d6096ec0846fbcb2edf48f8373d0e162630899e81cb563d937826317559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});