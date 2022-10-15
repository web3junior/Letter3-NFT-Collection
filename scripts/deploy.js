const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('Letter3NFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);
  //0xE7736B6eDcF6Def30038264A77F1458846440558

  // let txn = await nftContract.makeLetter3NFT()
  // await txn.wait()
  // console.log("Minted NFT #1")
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();