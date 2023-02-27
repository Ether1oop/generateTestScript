const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Lacedameon",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Lacedameon");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Lacedameon","LDMN","https://ipfs.io/ipfs/Qmbyk7AKrXxaKAkKui9X3bpCQXnsu5L3PJykR2QjuqeYev","https://ipfs.io/ipfs/bafybeibzumqs22htrfcdnncvvrr27fjha5noh3lxzye37z22ngiwkbu3tm/metadata.json");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});