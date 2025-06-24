async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with:", deployer.address);
  
    const ProductOrigin = await ethers.getContractFactory("ProductOrigin");
    const contract = await ProductOrigin.deploy();
    await contract.deployed();
  
    console.log("ProductOrigin deployed to:", contract.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  