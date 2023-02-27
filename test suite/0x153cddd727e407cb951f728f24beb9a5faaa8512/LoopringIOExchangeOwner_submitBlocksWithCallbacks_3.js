const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LoopringIOExchangeOwner",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LoopringIOExchangeOwner");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4");
		return {_contract,account0,account1,account2};
	}

	describe("submitBlocksWithCallbacks",function(){
		it("testing submitBlocksWithCallbacks",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).submitBlocksWithCallbacks(0,"0x5322843000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000001100000000000000000000000000000000000000000000000000000000000001e02fa8b764940bf9b9ac1d26f0424c6a00fd773c497bf557ae9f32cf0e2b3e3edc20568a238ac40c52781db329a5feb54cf2b250d94007eee652a4aacf4ccd64040a5cc031ec0ecef34a6704a5de6bf9bcbbbc2ecdd9b1e3227de6b37fcafe147408e07b8bf74e58cff7b8b9acc234b6b0025a91ca59049017a27e19bbd1d1f86b11d22ae12c1b0975ae50aabba6fcee3c6c1691c3080adfb01cea1b9e2accd1501bac364c8f0acf8f9f22c191ff09edd4d385332a35bbdfdb0efc0ad37b5e11a208d410147661f2d8b4e1d8d04b7b8623e339d9fce91851adda2f343271f6edeb2b1ecd8ec84c3e5ce0675d3ba16449f97f37d5cd024b860f47ae44aa9ec44efd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024800000000000000000000000000000000000000000000000000000000000002e8000000000000000000000000000000000000000000000000000000000000022620baba1ad5be3a5c0a66e7ac838a129bf948f1ea4139804ac313ffa473b0ef52d07b618b71af67e8ebb3a325bc82179e473d04e230a488388125d363bbd28804429fb79393c1fbf8a8d7e38f3e1652a5a7bd5bf7c6391636d000000000005000027110200cb476b8065c01890d8f716b5227eb61dacc7a2bd00020b650000000300000200a200023cea80cb0000010000539500000047000000000000030000018e6f0002554981d30000010000539500000001000000000000040000020000000000000118450001414d000184c56e1a80000001bb2003000002604700002bf5000163a980000100000001dae500000000000003000002554900018e6f0001794c080001719b0000000f00000000000004000000a60000034c00025224000087fc000081206186a000000188140400029acc000b572e0001172c0000000100000001619c9080d2b80a000400029ace000b572f0001172c000000010000000161992980d0f70a000400048798000b573000008b7700000001000000016500d3828e0f0a000300000260470002e0bb00005986a000000000000b792b00000000000003000001bb9100007fa00001717be2000100000000001f000000000000030000007fa00001bb91000169d23200010000000009f700000000000002005bf8b35bd79790048db9c09d800a66473dc2305c000373a90000000300000283920003a5540000627100000053f60000000710dee8a834e80200aee750f5a94e05685736dd20f3fc4bd6e75980100000a87c000000040000048c000000000000d4340002106e0000804a5fa12000000288200300000260470002106e000053d09000000000000b792d000000000000030000016ec900027680864b000001000171d600000001000000000000040000009200000040000262480001f5d20001804471368c000001830c040000009400000042000262480001f5d20001804471368c000001830c050110dee8a834e82d3cc43b9f66845fa65e86e44d0b0003a554000060040000009600000044000262480001f5d20001804471368c000001830c03000002604700008fa0000169177e000100000001dae700000000000003000002604700008fa0000169177e000100000001dae900000000000003000002604700008fa0000169177e000100000001daeb0000000000000200ffd2efceaa78971a02be598d6067fbc89ee9f4cb0000c64900000008000001be69822a00005b3d000000000000000000000001000002210003000002768000016ec9870e0000010000539a0000002d00000000000003000001e8790003a5548000000001000171d6000056d7000000000000040000000000000ad80003a5540002876200008005624608000001880408000002e2188229000179a700000000000000000000000a0000018d00040000002400000d460001ec560002e14c000080605d2c38000001881403000001b0150002403a81190000010000539a000000010000000000000300000260470002cc610000595d3800000000000b792f00000000000003000001ea010002e1a982310000010000539a0000000100000000000008000001be69822b00005b3d000000000000000000000001000002230008000001be69822c00005b3d000000000000000000000001000002250008000001be69822d00005b3d000000000000000000000001000002270008000001be69822e00005b3d000000000000000000000001000002290008000001be69822f00005b3d0000000000000000000000010000022b0008000001be69823000005b3d0000000000000000000000010000022d0008000001be69823100005b3d0000000000000000000000010000022f0008000001be69823200005b3d000000000000000000000001000002310008000001be69823300005b3d000000000000000000000001000002330008000002e218822a000179a700000000000000000000000a0000018f000300000260470001693d0000552c3800000000000b7931000000000000030000016ec900027680827f000001000171ee0000000f000000000000030000011f9d0002768083ed00000100060caa0000000100000000000008000002e218822b000179bd00000000000000000000000100000191000400000128000000e200026e6b00025490000080745a03a00000018814040000012a0000008400026e6b00017aba000080315eddd000000188200300000260470000ab0200005203a000000000000b79330000000000000300000260470000ab020000536ee800000000000b7935000000000000040000020200000000000118450001c1ef0001821a7278d00000018a3004000003bc00000000000255490002e7fd00018068735b60000001840c040000012c0000005c00026e6b0001e7ff000081b359194000000199140300000276800001329e86fd000001000053c90000000100000000000003000001329e00016ec98a6f000001000171ee0000000100000000000003000001329e00016ec98a6e000001000171ee0000000100000000000003000001329e00016ec98a6a000001000171ee0000000100000000000003000001329e00016ec98a69000001000171ee0000000100000000000003000001329e00016ec98a68000001000171ee0000000100000000000003000001329e00016ec98a66000001000171ee00000001000000000000030000011f9d0001329e83e500000100060caa000000010000000000000400000088000000000001796b0001eb1a000081c85986a00000018814040000008a000000000001796b0001eb1a000081c35986a0000001881408000002e218822c000179bd000000000000000000000001000001930003000002604700008fa000016b0570000100000001daed00000000000003000002604700039e3a00016a78d0000100000001daef00000000000003000002604700008fa00001698b82000100000001daf100000000000003000002604700008fa000016a3280000100000001daf300000000000004000003be0000000000025549000167960001829c71b774000001bf0c04000003c000000000000255490002e7fd000180147271000000018e0c0300000260470002b955000051194000000000000b79370000000000000300000260470001eb1a00005186a000000000000b79390000000000000300000260470001eb1a00005186a000000000000b793b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000af2d5d6095c000000067e20000002776273542fb9c9a40ea7fa5c86ee7f974ce79a89e0000000000000000000000000000000000000000000000000000000000000000000084cb00000000000000000000000000000000000000000000000000000000000000000000000000813700000083f100000f0c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008084000003140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000092d56a80912000000067ed0000000598a6b70a7d78f64e1e3c2894457016766cb3703d2d3cc43b9f66845fa65e86e44d0b00000000000000000000000000000000000000000000000000000000009fdf42f6e48000000067ed00000009e66f2fd8f087286ae9e7a3ae9953d14a9e64fb1182390000030c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000870f000000802500000811000000000000000000000000000000000000000000000000000000000000000000802500000811000000000000000000000000000000000000000000000000000000000000000000d30d7e016d9482e4765b72568b0b3b19410f03d590f5777311a5ab0900b46528c000000000000080250000081100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006623f9014ae00000000696f00000005641d28db87916cb065199f94f8dfa75f5a85343d0002078319a34e96e894739f1d11ba69a8704558e0a2fa1cd3e71246d5d20f0c4d7b52d305000000000000000000000000000000000000000000000000000000000000000000000000868c00000000000000000000000000000000000000000000000000000000000000000000000000000000000080010000030e0000000000000000000000000000000000000000000000000000000000000000000002f140bb2c1fe179fb50e1034840ea48438c514eb78db5ad3a088b8cbabad976be54e00a0000801900000314000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a86000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008043000000000207837f2c21bf3825bab69dd54087a61c1ccc2f07487faf87c5d61d666d6bd6ea5724050000000207834d760c24e04083dfb7fb2cd7752f883c41275a498fe29add00fd44aedfcaf16105000000020783b289c4489f564f51f2433be078daba5310bb332222b3cc4984ed7d09716d5b76050000000207837012d8fd5cdcad7a10022c6a2c5ceefa132d4264a9d637ec7534c230da86dbf905000000020783a7b49c8113e9f13e75e33509476087daba098e4183996e8d4f22eb05c3a14bdd050000000207839ced5494112bbdc1408cd4d7fa5ad43564de51615aa18d9558309f910be9973005000000020783478b12a96a021e939f1b5db711226839ac40d52228a1c722c9f14b6abd64b5370500000002078309ff4a2d82215ef234e00710ae16d482514630d915cbdefb9099fff56ec104850500000002078333c0e01a40b93cff6bd601027c8cd94374ce121ff8612932c5ae51310a7b788e0500000002f1408112fe916691c846d6335991f72d77adab562c0ad987b310164c062957def20c0a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000087100000000000000000000000000000000000000000000000000000000000000000000000000087110000000002f140d987f504d92ec41ef62f9da87c85bc387430690a1834958913498c6aee81c8ee0a000081860000031400000000000000000000000000000000000000000000000000000000000000000081870000030c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000083f200000412000000000000000000000000000000000000000000000000000000000000000000801f00000311000000000000000000000000000000000000000000000000000000000000000000818800000314000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7100000000000000000000000000000000000000000000000000000000000000000000000000868d00000000000000000000000000000000000000000000000000000000000000000000000000868e00000000000000000000000000000000000000000000000000000000000000000000000000868f000000000000000000000000000000000000000000000000000000000000000000000000008690000000000000000000000000000000000000000000000000000000000000000000000000008691000000000000000000000000000000000000000000000000000000000000000000000000008692000000000000000000000000000000000000000000000000000000000000000000000000008a700000008077000003140000000000000000000000000000000000000000000000000000000000000000008078000003140000000000000000000000000000000000000000000000000000000000000000000002f140c95b2aacfcef5b97d0d82760666e2989721791ec27483c6f5ca775aa55abe2dd0a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000806d0000051100000000000000000000000000000000000000000000000000000000000000000080430000041100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009e00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000460000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000007c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014c0800000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000cb476b8065c01890d8f716b5227eb61dacc7a2bd000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000072b5c3d2820000000000000000000000000000000000000000000000000000000000066235b2f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014c08000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005bf8b35bd79790048db9c09d800a66473dc2305c00000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000007355d603fd0000000000000000000000000000000000000000000000000000000000066235b2f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014c0800000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aee750f5a94e05685736dd20f3fc4bd6e759801000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000007355d603fd0000000000000000000000000000000000000000000000000000000000067551722000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000bfe7440c300000000000000000000000000000000000000000000000000000000000675518f900000000000000000000000000000000000000000000000000000000000000424c8c793e7f0a774a0c85f676553e530e4758e96dc9041365cb931cacbb50e9e738073ccfd77763c10b8bdb10b8ee457f343b222d8d41bc2e332561351a0acef91c03000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000014c08000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003a4a14d13a4a4f5d62171d271bd55d2d255bb5ce0000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000d09d8765360000000000000000000000000000000000000000000000000000000000063e079d8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",[[],[]]);
		});
	});
});