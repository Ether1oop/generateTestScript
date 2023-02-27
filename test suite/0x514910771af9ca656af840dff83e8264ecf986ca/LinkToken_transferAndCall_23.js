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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x0aaf96eb9d0d0000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000129abf8271fb0c09f79b87d7941eee19dcddc0311d4b534994084e3ee63c8a0bcda878de38f756dd8db3cbc27bd60b88539ab00f0f7cf60846671e5f651b8f01eb19d1bab7621ddfb88838f9f4679e14d78395cbd9bf628d312187be333197f939c04f78c427aea4c4972834e7ee373bf503e6a149c614082eb8e8b696cc88ed2004521664c44d38f9643ff238211077ec1f4c8d73b11b163875c0ba87621c4ca25fb8c0bceb36751a0ee8ad459f1634c034fccad40c7858f451195d35447daef23986d30fa05052334a51f21ac0b806f303d42073bfe7a60d38fefa0eed211e136dcaa46b0197bf300995c20c2c2a6bedf8d78652c132680619e36bf0a300160b14c693d11ddcc81e7d85c2270cbf0bcf302c181827009569b172df3e54cf86e23aac0e7051f164c3da360d0ba5e16d702b72bb7456a4a7f01d971c61af95ef1ce5b9cb80b8693f9d7b41b08ded90f0f79be615d4b43c06e7d7d27f422c58934d371ee20da16070f530017b7ca86b38960388fbbb59f211608cdca2a332857de5fc5c143ca9736fe90f0a4e042bb9d35cae01060d6427073f9ff079233d5358a4ba7ecd5e71499bff2e447f8152b9e784163e150c54e4315af59deb93c919000a543b4e83d6847df9b6df5e84f97b611dde166149a2458521e30077db8b20becf975865968ba748804f858d56659323cb40cded70f69b2643c4c6a34d2bb32eba94ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});