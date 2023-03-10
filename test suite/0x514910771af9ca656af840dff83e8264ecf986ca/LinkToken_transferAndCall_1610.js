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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x878678326eac900000","0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001224b7616c22ca4d12579962543ce49b3f270a0617070e9296949f4d00644017e3fb7abdf63acfd98c22ebb963e064ec9619449911e790b82f82d06db927b5c469950e50cfaba9a1229d71655f8a94bf4fc0abc138272b6ce9d5c1eecc908423021a4035c4ed9a03c648aa3fb03f839bf089a6c7f11a47896c8b88610ef3c54c71dfb75c56305749a373ec97d132839c7d935df7e808033b9dde9c356ea0deb7febf0003b3c05eadd3a03ae6de25a6c16c3bd598ec9a009a7337fa8a8eeaeb0ad147e67056f49b675e72563c2802a205bfe353477ca0e2fa5bb78788ef84a30799a2d4d853343e1b289002a8c604338bdc38bce04216e875b4d913fd2730b6e383addd10fc9278c0dca0ab4f119efa094c78005c93bb1682e73e3aea97e72be77be48f26cac96c140398f02e2e4bed6c2699961184366a06a14af19de9d087eeb18a99d92157f0f7142d0ed6c27f1e77a4dc959c13adc2af6770527892c7abb96cfe6b52e7875d2b86681f7cc686ab9e48a553b18a8f8d3ccd68327d8349a749d5f711f56c8f8d1127cab7df865080c27d9be1e0425d09aea0bf72d1de9951c5b5d4a9862f92cb1623f3e4c7f412b2b7e4d4a8d4af38296ee90114ae2fa175ab6a8ddccc582bcdf03ca2e61cbe5399da4760f928cf708ddde770ccfb9063e3a52295b57c1dd58ecf97866eb5df491ab02d830b5e5a5221efcf60cfb9ec0f079e4842eafdff4dad0f0e7ad7ce38fa991536f15cfdb232c5398b494264cdb87ba58d7506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});