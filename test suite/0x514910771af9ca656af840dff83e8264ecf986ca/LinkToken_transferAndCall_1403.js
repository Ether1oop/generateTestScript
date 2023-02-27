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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x017b7883c06916600000","0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001286b0eb2d2a66be642402deed139ca52941eef157ce41fff2e7f48804fac3d435b0063ecb3d78a4fb614347fe0ec6212a4d30246c91f60ed52b9071512b780e158204c7f3cd68292acf62afd0ec6e4a05867cf1322a37be798ee6867c5b87042b73da26581f6bcce3a150b2ef6667bfd11d95f069b4ea2a7d25e774fb9cfc1a3ec9cabbe038d0cccedc8d6f76b8e66cb6e6ba086f7e107e987d05f003f3ab3bd3bd1f3c979042e1fc78351f2f46996b8fe40c0e75a0259367f1c1fab1a7b5d92b15ca53eafc3b69d232037bcc1a7666665a98611345eb038a757c49dc94813fb6dc16716982374451cdfcf6ca018d8310cceb4484cea93edcdcd7a8e20d8605b45d5f3d1f576dde8b9da0e881740873b167abc1239811b9e43e7b583c7bd5c70ab4ce5033a4f9f6172b103204baaf54f1d0d7e0cf526391a91ce9f6b9d4b3e7db0a07f74fd06060acd888aa59755441f9ecf97d29dffbfa21008c09f7ecb18c2b2639c46f1282f8ff7b4a1a902cff671d7980a6d95c49811925eab01fc90d5610cb73519d21315a0fcf5df2ab72103cfd0598a96f611bd9e2a1699a7058a4f136940c71a0f2ceb76778f286d7a01c06594c82a37e1a2e82fb5e3dfcac83ac93e6fbecac61c12bc5089203ccbfe4f840ab140ac26c96b1522fbc958f80eb09c33efb4ca4a84867c4e98c061c8abb7ebcb0401654ff5be2910d29e790a4f567f610e5d75c9c979034cff1617053d09a2eaa7d34b9b8dea9ca2f23162097678c53127506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});