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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x017b7883c06916600000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000125bc810b0977e51708689789c97389a2df9f4e4403ff1fc7e1c9062b07cd8a7828d438e5de7ee2ea21576d8e535d2e21b603730b53f56ea557d2e74a3edd88f563808a041d92792bc53173f08aab5111834d905fae85b03af7e2c115fe01e20a10be08a584ce3576ec26bf5f6cfac1050c93da9aec997419ba97007f54101613f75f46bfd8b1bbd6ded7a0700ce2449d1b42d38c1de3ca4168cd622fd27c94f071b3314802e6c258c137c1b0e54448b411d8b65ad5945346f019d83f4412cc4c383350c8c4fe92aa7558d325099940e4936e46610c4b712920df4a825a848e60b1e64e378edfce61979bd7078c8657a42f1ee65fa2a2d95ae3b4c12c350c7119917209bc88693f2442d0936b2143cd57e10cfc989b781f4153a2af9b4928de73fbf8ff19af530476dca14d89cdfe23b8b40af8c60090ce20cb4169823ac3457ddae6e3bb2682d839cc379d810821c485fb3dd644fe0ce45bf2f4a3d165e938335beee7372faab641750eb555fcda2d1e9b5225c032b5ed94ea1112b82d2123bceac7d8fa66183a81a77286bae578c34cb8153366c002c138eb9cf616314d7ee68862fc57d7c6e1f4e650efcc53d78ab0c45cb93b66128114928740ccd086700301dce758a234501a471b958ef5049e2e77d1d37466102d5b4defc8badba6a32a29f405b149f737ed5b0871be75fcfcc2f1c8d2cdf8173aa1dd8a2c45955ed8af742eafdff4dad0f0e7ad7ce38fa991536f15cfdb232c5398b494264cdb87ba58d7506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});