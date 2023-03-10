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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x0de0b6b3a7640000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012946f5951af96d34529f6b320908c8aa8c20ac8ce64a5ec7b4c1cd5809eee3a7fd63b6747e93737b2784cea764d617b76fc5efb8849e56daed0c9bb5b79c06370a535cd29df6ee12660b016e7226721aff121eee662818df851b108ee9c7c5b8ed3457b2924d8600e07cc8a97099df1421296e39d13bda3969ecfe64e3f1e7043eb0a74f160efb3350eb640e31379c6f6d3b66117d01869d20eee7d5b11cc15055c36d23a96824125f92681411f25f21cbc5cc979fd8b964ca2753468d479e6d155e52ce68db5ea593b3ded9af7dfbe5f5d75f171de9c93691db3ff4207058f77af5510c24c21bee9e477c8e2f06b216392cbafd267383cfad1d19bcb2e58551beb66894e2c1b01b38c2eda95578e3c1f876445dd33f4a6606d35be4645f8ec6215e21d1d0a7def1e0030d9801b7ae606e9eafef7ef085b450109db6f3ed2bb4e9b392d0d418f195da21e1b0a01b8016350ccffbf0d69f1914aa14b4017ca20f0a5907fa81669ebf8b12d7c915694e2d8488711b6053e41a01423e6694e976e42e8e417580c14fe151f9a5758e4d11bf077299dee759e3fdb5a1722611140e8b8ed46618133528e795e9acf0fa94a43994fe08282d5fab2d35c7b8248f29048fc543b4e83d6847df9b6df5e84f97b611dde166149a2458521e30077db8b20becf975865968ba748804f858d56659323cb40cded70f69b2643c4c6a34d2bb32eba94ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});