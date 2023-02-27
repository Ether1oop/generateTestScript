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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x017b7883c06916600000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012c228d0e6ab2b78100cf9539cab50bdedf72b39f8e391d2968f479b700f247631b265dabdb320eb40ce058d203d9dd9b46ea16ec00448139e2bfacd5fdef9d64ebe020fc48322368e54f5450fc3976223da79a0de0e14745720523d60990db56e1ffa140a885de49045ed280474876ecb481fb97eae6efcdb82bf831b5e984030ba795f5675a37872271a8d555cc047346d5f7e0a24c407a49f35d9a75383c972b140b4f1c24b39c1658db70664096cbab751ab9254ee5e3049f7a84dd63362f3cdd8f9cff7c7459e3e215c70d4a9a81152ca6b8ab1b20a1286779227f69e30295fd511e7c6500cbd5c189ed738a5eae10e33244abde877ad15e5b0b15eb429ce912bb6102b87cd1ec6bc51682e9dffcbb98e047270bed788683a01933a9d6f78a4184cf1fed8c364093fcb721bdbe02398564f502882e3d6c1d121497e6fed2c74e5bd0f4e625174f2553b2e7bc0ce222dbef6a80d15227c6c8c3d35835f969c89d98edf860ac79e668a7bf6eb3a9cd64d0d40fa574fb630e6c70d8295e276b52c93fcca2a7b01b9bd18e09b3b655d132146f3b6e881c2c3ddaf07976f57e2917adcd87dddc62ee19a8277144ce1595f8782b57de7cabe6076e95e20b4b6b48bca45e2847178258fff0359e5a5631c0ede1964c28e3f1a5cffa2cd48036c96a8c485d7c4b903b7ceb21e3a17615184e85fbdcb667ffefbeaa71505771816753994ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});