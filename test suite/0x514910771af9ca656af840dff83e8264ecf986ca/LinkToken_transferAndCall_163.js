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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x010f0cf064dd59200000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000125e1e89d9229c82a7cc46c7c3bf8078c8d32d095b6d37e24da1ba4e605d51d32ae3047801e99ce0196cff897f5069a4cf1cd362b942daf31f4a3f0e3774b078e9fd0479460acd5cfd0d8575dd9c53845e704c2f9d9a748d03601834a3b6550750e4322e037abc6029d8396f832bd2c4e15ca71c8eff5cd10030c98b59f3a9ba1b2b7353ba471bc9cc144c6c99850a54611a5bc9db12dad87e0855e55bde21ea49f24ab3d3457be9ae503b7a15b295507531925f354e905567acc8bc06dbe77d74c6da3288ceeb3ea7a91fce4627f0a1d93376ed28d9991b571f53d548f60f52a3c1f6d75aa9cb071da905fdfdb71886713839be7c39b238b29cfd839504c2f75763e9d677621a070f08820e423205bf318a805439cd091dce8b207abfae77059c68b42098fe3fc741eebc6ec18a3098f59d45ff27431d93c54b2c685feff6b887505dd9a1e43ab6f84c66772933e53615edb1efc9e2d6070f10df63390db4e5f9748612a3b0580afcb76ffe1a3cff0aca95a44d2352ee70c123136d58ee43c35e2c93fcca2a7b01b9bd18e09b3b655d132146f3b6e881c2c3ddaf07976f57e2917adcd87dddc62ee19a8277144ce1595f8782b57de7cabe6076e95e20b4b6b48bca45e2847178258fff0359e5a5631c0ede1964c28e3f1a5cffa2cd48036c96a8c485d7c4b903b7ceb21e3a17615184e85fbdcb667ffefbeaa71505771816753994ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});