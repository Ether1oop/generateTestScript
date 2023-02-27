const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OmnihorseNFT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OmnihorseNFT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Metahorse","MH","https://mypinata.cloud/ipfs/QmaBjUYuf2MSFmZaEgsrNd11qB2uUP49oLpLyABjb1AtYn/","0x1F6938319F4873E84842c6f627496AB325B36e8F","150000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x02A04ed5bc334159BbD5Bfd18559045a66c194aE",1);
		});
	});
});