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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x3635c9adc5dea00000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000129200bf866cb6c38c2e4541ebdcd2de55615fae95816670127cb2a77021873ee49f3eba676d7e100de819793ce14e209f9df024e1a2d02fb008bf3a74b006b9762afdd6f3cd43ddd01e80daed3783a2c8c1b0f3668c48fdfd47b468f0101a386ad1ce42b5a2de557a6b7179c9db7fa8d91ff873f6d6f87b37b21c86b5785d7ccd09b34ffb04ac4c49336f83179602443b2f433a54d7f4ff503d45085df4f0393459450836ac99cd0ee28829245edff84f7c87013e87a361a8c9bc7811094e0b25a3bbe542d1e034a1e086e21c27589fd3f41c74938a354e241ec07b0475d7b6c03d33bca4f3cb3510a872425676f08a5582f04bf3fecdd3c1dd6ac62fa2d87d33d54076b0911b2f11d5074514d0658ded9378dbb3879a11e77be697527edb08637deca155e39280e47c67618ab6b861813c3006bd7782f96f5034e208f86f8a44aff2c08607f0f3ecf277934be52ee38ffce8df4a6653ea37e915f2936cdb5b99c1e45498f212a6bf9f04cf990ce4bb66ff454b385a959d97632b5ce1258e429f53c1ca91f33d10430262b4d457310a453feccd60d737b385c9f24a767a1c4752ea2330bdf6723afeaf078b2f8732dc749f6d3a0c4c94ab0a9fefd6ff3c69be82ca45e2847178258fff0359e5a5631c0ede1964c28e3f1a5cffa2cd48036c96a8c485d7c4b903b7ceb21e3a17615184e85fbdcb667ffefbeaa71505771816753994ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});