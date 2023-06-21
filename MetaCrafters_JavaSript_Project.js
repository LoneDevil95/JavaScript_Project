// Create a variable to hold your NFTs
let numNFTs = 0;

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, image) {
  const nft = {
    name: name,
    description: description,
    image: image
  };
  numNFTs++;
  return nft;
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs(nfts) {
  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
    console.log("-------------------------");
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return numNFTs;
}

// Call your functions below this line

// Mint some NFTs
const nft1 = mintNFT("NFT 1", "This is the first NFT", "image1.jpg");
const nft2 = mintNFT("NFT 2", "This is the second NFT", "image2.jpg");
const nft3 = mintNFT("NFT 3", "This is the third NFT", "image3.jpg");

// Create an array to hold the NFTs
const myNFTs = [nft1, nft2, nft3];

// List the NFTs
listNFTs(myNFTs);

// Get the total supply
const totalSupply = getTotalSupply();
console.log("Total Supply: " + totalSupply);
