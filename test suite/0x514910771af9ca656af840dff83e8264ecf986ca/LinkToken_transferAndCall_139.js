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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x01236efcbcbb340000","0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001225f174b651b8c2527c4a6e9ef48ee1eb5a42c18fe372262a1da2aee517f91a8ef7a4d2bb2037aca22c4138bbe560656527cc152c74b908fd05c4d5fd7fef10066b9f58fd298615ec6e5bf08862768f58df57e3bdc56ae1802097c1434632a36b3f5035c2956c11434682f98fe167ca9ec7bc0ee2631cad19de44a57650c977f25d26c8fb72320d526e8ae09910f672be1c6f377836ba3e06bbbaf5823a53534a3dab5b49bcc8dc0764004c0cde53c2dbc41ea6c190afa09286dc1fe7e8b3ab58aa5cd3e6c30a1257d55bd36b4729f535d45e72063de946e24266574729c62109533a648a9fecb0040cdfcba290a38193b757720240c7ad8c51c7a1e40db741301a35da6f5eebacaee260992ab35dd4794c525b79b642d0dc710a4a8c84a45d442ca60eae7a04de7d20ae04ef47deb75a58821be1e2277cd4de1747fb27ffbae68b9b236ca57c510764c19931d284ad6815e4e36ae2c4c2e82070ae6c737d8eeac53cf8c5e8f4714967090890744a607e64c726460d33bca9fa2a91e2fc2abd384e341622723dd826811439acb4b226a231f11e1ad104504ad36d798e21337e13b4ba756ae07acd683034ba635c02d7c2129003da7de158df343c214f9bd114f179341b73f62456fad222cca62e19f484dc10b8ccd3a8c10ed8c8b50d56c4fc2b6b1c013d0b5cecb8df3f1a6fc556f5fe66de0c4d1cd8b0a82256262fd793cf2fe5d75c9c979034cff1617053d09a2eaa7d34b9b8dea9ca2f23162097678c53127506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});