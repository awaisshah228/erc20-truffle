const ShitCoin = artifacts.require("Shit");

contract("ShitCoin", (accounts) => {
  it("should put 10000 MetaCoin in the first account", async () => {
    const token = await ShitCoin.deployed();
    const balance = await token.balanceOf.call(accounts[ 0 ])

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
  
});
