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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x0c34e760ddd5eab000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000110023ddd98ccf2bdce2ef2ead35a831a7a640d0efc3b0218cef8cba61d507a2ce3faee649fa3c240b648e46652b1156f889155d7e1ae0b1e69a6b7adeb188ee437687323a2066b86aa8595ca634b4fb27016b36331f6cf4802ffb417a2aa5ecc7647bc214a8cb907648aa8eeecd171bc112a20a6dffee70c8ec5ee73f680aaefcd1543fba234a62ca170a901c6a54b0eb3ca7e568dbe580561d011b35471ac1a79bd32df29b1a840b79856d6bca9674432fcb438ae3c1d6477be932f30a6ecd0011dc022bc1aaa0828237f8c84cc2bf1a7a5df59381608d8d0b8bbe51607d04fbd65c677757cf95297750adedbcd3d5b8c8ba845c9cb38dfb6ed19e7ee3e6fae414df948f6f0c93e038f662233df62c925130c99f35f913426cf9ae4abbc4e472a31c3e1992e1c8308dd2655b00cfa469f773909300d223b91c9b4f56aa750d3cd5ee94bc48998ea5c39bbd43b05e2ce170b227df3fea6ba15991f5b7ac3e59d59ab5933be9397e8f02860f7dd92e26b11f175fb0901de8f5712df325b648987301bf3e4275c8af532f9645e0ca7ea26ec7859005383cd3d10309e43156f6ea6e8fa34742e89ce45a3182aeb45d56a60b57244d0c31d5c50725341113e6e2739432b0589380d3994681ce4fa258d28ffd0671e0a283694c7560927029e566591517559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});