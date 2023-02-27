const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MineNations",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MineNations");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("MineNationsNFT","MNN","","https://minenations.mypinata.cloud/ipfs/QmakUaue1UvuFD4rHFmQfuLXBfjUui2JoAdH88f76GMGUN/");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x4E41403b85D86Cd11e2A208d86dA02DD38DEA668",1);
		});
	});
});