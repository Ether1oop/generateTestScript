const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("sproof",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("sproof");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("lockHashProxy",function(){
		it("testing lockHashProxy",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).lockHashProxy("0x06F3F4DBcB48d3d868e9B832F695312466DbE1f9","0x703c246cdd2eaf21ddd11541b32942552ba90120ea12335f4eda86ab124e7a36","28","0x1400d331054af9784132205d75c465adcd3d919de414cc5069e2dc2af3a31cbe","0x612fbd96e19ae740e173e987122a93fb7509cc10152a93a9ab2569db5c079e78");
		});
	});
});