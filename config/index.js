export const config = {
  env: "prod",
  LOCAL_API_URL: "localhost:3000",
  API_URL: "http://localhost:3000",
  COLLECTION_NAME: "MTVPunks",
  COLLECTION_TITLE: "MTVPunks",
  COLLECTION_DESCRIPTION: 'MTVPunks.',
  COLLECTION_IMG_LINK: "https://punkscape.xyz/og.png",
  STARTING_INDEX: 1,
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "Multivac", //possible values of ethereum, matic (polygin), klatyn, solana
    ADDRESS: "0xa4b775e2563fa3a7f4d82ada9595383edc4bcb68", //note: for solana these values change, so currently not supported
  },
  WEIGHTS: {},
};
