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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x2b5e3af16b18800000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000127729f34ba0ffc861c893092792d8b9662a4f95476d5e248e7798e597b89a4d3418d0d1df614e8df967220c8fdb7f8e88d9b87a1d8f8ce6b323bad3ef84f673883b970b9fd72084c8fbda265e565c9bb5446198583615b01e5a7946ead0fa7b9d896870ca7cc3da57883af52e567596143b766b9a76dec1b2c9c4ee8dbd648bc5f9c6c7dfe096879b592c38de5f5937baf468ab07e3ce2afa77e73de33cfcb1afb92c26bcd7c2c9bb8069d66908acc777410c875046a85b8d07ed8b840fe3771b2b0c6a1a60fd6ff51df5d5ea99a3930e9e6ff4502b54e8b0dcf2c2679d2e4225e8725f27d72025310af9bf5e2fcd18b4d07cabd29ef791642dd0c1f6528aa05f82701fe06f618cbe3cfafb6a54afcdd95182ffd58982978cfe1547d53c30593dee860a19c4eaab9a89183397db2a7656b2be45ad737b00ee7a2b691e6c89de01e969a56f802073ce0a3c2f3d1267b845d72beec5901060f6dae5f02e970c8c189424d2cef5bf577bda4b19f8a025812302c92ca5be5be28b31c8314c058da32fc86fb55d9dc283aa6a944c5ff0ce738f30b87841e436bb8df6cb50cc2e3dbeb5d1a04107e25db091f89e916b1a22e0d921d7256e7d4db652c85f6d1355097cc92bdc2e5d0de5e8d944dbbc5984072ab38916ec8b667b1e08eb21b0cfec3d4f8ec485d7c4b903b7ceb21e3a17615184e85fbdcb667ffefbeaa71505771816753994ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});