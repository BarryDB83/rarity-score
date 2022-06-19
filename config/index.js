export const config = {
  env: "prod",
  LOCAL_API_URL: "localhost:3000",
  API_URL: "http://localhost:3000",
  COLLECTION_NAME: "SpritePunks",
  COLLECTION_TITLE: "SpritePunks",
  COLLECTION_DESCRIPTION: 'SpritePunks.',
  COLLECTION_IMG_LINK: "https://punkscape.xyz/og.png",
  STARTING_INDEX: 0,
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "ethereum", //possible values of ethereum, matic (polygin), klatyn, solana
    ADDRESS: "0x5537d90a4a2dc9d9b37bab49b490cf67d4c54e91", //note: for solana these values change, so currently not supported
  },
  WEIGHTS: {},
};
