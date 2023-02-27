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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x6abd5d3bca78240000","0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001254d4320b6461cade143f515bab05bbd2b2ece88482088052b0f14f40db3d58cfaefa09a4185b292d44b68cd3210325ce538cfb2a41b3a783fd9c78ba244273f6970603dc6479920ef01bb265dfcd8fa988f24a95eb6d21b7a38a74dd54fe55d4e202ba89c37f1650aceebf25cc9c73937a5d6b8c0e332f5db6466038d30d43e17488bf732572f6879c4d6520fda767de9508e4ce3a663891340628ec483e113d68103477857ee264c0335545e0270c594ec4c1f7e50041617f72c91e52c7cb47b7b9980caafc57cf6053b68e7eadc42869a462326dae7be7208c32a8901b92ceaeacc0d8b663b08d40f9090cba571ae12040f7542c16c3dcb23a22c750ec0a3ff9a17d0a37e726c107ec90e0776232c97f21e1b44251f848c190595452cb0f00d134127e747fc8080cfd392c2636f14efb0f8d87c0839c5afd8970bc7046fc1f85457d8dff0d2c9bc5339aab0d76205d0d52e2b95a6c66de58f8cac62e60639537dc64f480bde4684ad6ea788ca6059c58943b8dbd740172cefc3acd8eaef8fc80df9e91d25e684030a29a302a953b95dabca6b417d018baf62278a7a980583f0f0f6dbbec26dd0e99c82e871843c919005e2e3020f2db7ec0e4ff7a14568297df4bf81d2183f68f06b9ddb3b311bb7f794ef6f09e36f61d9c18a5545598eab9975865968ba748804f858d56659323cb40cded70f69b2643c4c6a34d2bb32eba94ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});