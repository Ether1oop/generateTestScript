const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PeaceOnMarz",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PeaceOnMarz");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x7007aeeAc69204505A91aCdC7Ee0aFd84A011EDf","0x7007aeeAc69204505A91aCdC7Ee0aFd84A011EDf","0xF41584610884054C86825fFCD5AF4B6060327750");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});