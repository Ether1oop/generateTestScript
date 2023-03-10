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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x1c44b2ee48a091b000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000123654b983f6fd273368780dacb50d5153b24ccf792158f767c7ce625b5f99775c73dceba730698e2d7554a0c2f25c54ec119554e44b78cab3e10cd60c47e38806cf02f3d8c69d42fb8966f5cb4c5a7925fda7b11d9d585fc3d74fede1f51e99b442bdbfb378593bc05f9b1907cc69ec85e815b816f0db19136ec35bd06631277547b9e66e62400776fd004071334ac4483d89b024d7da9f28d4b7d92d836f46875432ff084cd2da473f92fc3d6e0fd9660659f64a061df6a5bfe6f2ed16e2fdb063e22af28cbad6a0d882d2a263e8c28a3ce4b226232aee8cef431bd3822ac095177272123562be38c714a9f6aad33f6e2f1d3aa163671a366f00f4b6f12da437557b7822ec5f71d2d5c2b3e5c0646da7395232a0c577cf5624d8b78bf13cff5f99877a8cbdb5ca2c52ce36d60a303db4edbb1b94b1bf9485f02a96021cec42fa8b7a64f63e63330bc271f67d5690dbaf74c7d616ec5233bc08d725881533786441359b42037787c7e8c5fe527bc9723b2b16b867ae9f8fed532253b0c0bb78e0c34dcb22a89d06211ff487a40c789b98c00406a038b3edb08213490828bf480a7adcd87dddc62ee19a8277144ce1595f8782b57de7cabe6076e95e20b4b6b48bca45e2847178258fff0359e5a5631c0ede1964c28e3f1a5cffa2cd48036c96a8c485d7c4b903b7ceb21e3a17615184e85fbdcb667ffefbeaa71505771816753994ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});