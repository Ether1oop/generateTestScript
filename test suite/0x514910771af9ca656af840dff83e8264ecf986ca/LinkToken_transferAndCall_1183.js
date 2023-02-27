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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x01bc16d674ec800000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012dd57d9dc8f5d2f5c957a2dcf3f6aed2e1849d675d50210661949dde2cae2b56f0ed3f068f73b7f466cc10a295fd88261dba689e716a3354ff0550c54b6d8e795f7cd8b87e8fd897d1704e802bce0bff84029f6dcafd0c70b1370102fb313434c74fb4067ac8648c791cf6e9581a037eeb9151d4fe608d78e7c82bf12b4105093b4dd6d5c38552b98a48028c385f60a048a4e64e4d72aaea19e92fcb3227ec75e5a8eabfa9644846896eb2dd9dcbe0bbc218f45415f8582b5dd1d6a03f234159d19fa75440c3011ef231ff381f28928b771bfdb955e2ce12721e1f1d7a5390caa07d0191f2e861dc278dc6ca47e879766f62381b0878573dafbc4a67f02924d823a5b281567eace6546ce1a0ec713bc5914d3e6670b60075e5f17027915d3debee34f9668fb329d2d2ade8472b6a47673f0938f6f97dd119683227bfaa5f16d3fdd0cd9822949c4587cb112ba3c8698d8036220e9b0e0e1bfc1c55be7c11552b39fbde5aec075288d4aa488cf7bced5dd64b7aa448807bb08d00de784afdfa06704437e6724b8d8b40b855cd1a4dd63ea83c6ebf382d058bfac40cb77ae7821e93f0776d08399e15d60a2192d1e121af7a9230a41bbe8485ddbedbb7794e82c3edde0155729bc57709d38c8d2ec605ee2782e258f7c6e2a21b2319afc50180ba26b1c013d0b5cecb8df3f1a6fc556f5fe66de0c4d1cd8b0a82256262fd793cf2fe5d75c9c979034cff1617053d09a2eaa7d34b9b8dea9ca2f23162097678c53127506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});