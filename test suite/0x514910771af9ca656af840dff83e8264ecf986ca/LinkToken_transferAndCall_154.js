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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x2a1f0a87470e840000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012504684f188213d28a7b23be6d938d27e6ca6e0a9a8178370a61fe7801ef4eb4bc8460c2c3137f2aa75fdb3523b8ed9c0b6b68606ad6b73ba7b3b790ed98ddbda3df44aaca1ae0a9a268597d50512b7f41d42fed8e35ca511f045997e9d6c7c7a74ae243f5d7b5f14bac759ea074610953277b5261e038ad829f371e3dd7a8cc91df845b14795babcd88fd5698eb3757a33a69d79ad62754a63b6fac1b77210c9616ba3b8cfcbde3602a93a4b13382e13bbfaf041b754931f509285c01a0d7602856a8156c42b32038daa9ec187afb889e939d3b48ce7a6ec852f998badf73b7b25495135c7d7c9fc948db27fff0a479e5c64dcc9a1c2100f9aa7440391a4db96543dea0b25fc2aa8bf37528ab6d5ee65c3a09a08b91318a56eb21fb50530a2b82cb9e7ca6f088eaf5b9a0763d6d43cdf367fdbc3a50969c7fad69ebd1df692c78d9dc70c97743517f54ce101ac683640173dc00a8b7635bb523dafee4c85e1d9063c9b9b2fb75d3a03d5fe011b54360697f9edbcdf80f06dc072a30cebb359ccc34dcb22a89d06211ff487a40c789b98c00406a038b3edb08213490828bf480a7adcd87dddc62ee19a8277144ce1595f8782b57de7cabe6076e95e20b4b6b48bca45e2847178258fff0359e5a5631c0ede1964c28e3f1a5cffa2cd48036c96a8c485d7c4b903b7ceb21e3a17615184e85fbdcb667ffefbeaa71505771816753994ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});