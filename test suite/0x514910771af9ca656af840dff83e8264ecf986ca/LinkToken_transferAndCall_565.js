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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x19e99523728cb80000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012a2436988739e48ce0caaea46bc768a676a401ab2ac68a59e47a830103510c836bd8f0de1841cad3dc029f33dcfd895e7000d9b9b4aadf0fb20ec4ec07ac7037b8bc90a8c6e6e9dba6186df991537e4de26f32b35a09c34a15022374e8cfe647597b94a42451ac14db6a36576f41a098abcc65b47f0e52010a632788bae41d55fba6639dc96728fa49b74bc1fe88e40680ea21ba7cbbaa52a5a782ab44da6d35c51eadafc49d5c974952216bc660dcefab72f2218b93c0d6062a056e84da4e539f65b503075c11876382bffe65e1bbadc42b283e925034cb331ac64d84546a72eb66291496004edbfe3d4b78d97cdf5367b439693fcee309c31e6fd5f990e9ec80818122abea4294f0b66b77b63868b80bd6ab59e25a508b384f9300625457a07f86bf3549f959edf2f52748560e20e80f60adad46d348ea93c2e6af30f0212e36052eb22bf79b937cd0c156a6841cd8784524e128c6687baaf14475965c95683966e988093d93e1c5c0e45ede76738e6e9cbcfbb475e3eaea39431dfb696527f766e78bfb3ba976b2773d8824162e8b1eccc27fdafed53fd732a1af309e85e98ea2330bdf6723afeaf078b2f8732dc749f6d3a0c4c94ab0a9fefd6ff3c69be82ca45e2847178258fff0359e5a5631c0ede1964c28e3f1a5cffa2cd48036c96a8c485d7c4b903b7ceb21e3a17615184e85fbdcb667ffefbeaa71505771816753994ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});