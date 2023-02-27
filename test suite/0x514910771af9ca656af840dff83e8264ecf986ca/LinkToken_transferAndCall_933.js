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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x16ee4de2d9963c0000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000127ea4430b567755c3807eef75070e18db98f815fc37ff81808af5b64979b6d8ccf2df9626268379d20d6a2d9e6e2792392caaa75b88c454b5cacb81da3d2f575cb0be973828bcca6f56f74ec8dcf7c0f38f789574cca625a87472d360925f79210a8501caca8ee75309ab2c9d72f2bad0ecadc629cbf019aa60e1106ca44ed397520da13289806a42fe344affe868cac07a39ccb4917aa7a70ffe4a98618517e48941e6fbdb2f8ffd92079c8a68896a22e056c64894f0dd547562fa12c3a3465173920b5703b9f830af64624b163f8b08dbf1a7d39c90bf16ff6474ee5f905a75cab2156c2a1faca372d2e444fe32e04c1ec12a1bcc81aaaa265e183f6cb7340e3a2c230bfaab08670685c6c78e14609cc7349b6b3963ef20f9f6a9bd79cb2d968d0de59aabf0770c34633d195a6a9d62b82a060b083065d77d2c4d4757a3f4a7bc5acde876be341a0feb22c3266dd0e79f626d7e2da5edbdc8c8688355ff7389beee7372faab641750eb555fcda2d1e9b5225c032b5ed94ea1112b82d2123bceac7d8fa66183a81a77286bae578c34cb8153366c002c138eb9cf616314d7ee68862fc57d7c6e1f4e650efcc53d78ab0c45cb93b66128114928740ccd086700301dce758a234501a471b958ef5049e2e77d1d37466102d5b4defc8badba6a32a29f405b149f737ed5b0871be75fcfcc2f1c8d2cdf8173aa1dd8a2c45955ed8af742eafdff4dad0f0e7ad7ce38fa991536f15cfdb232c5398b494264cdb87ba58d7506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});