import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DAIImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as WBNBImg } from "src/assets/tokens/wBNB.svg";
import { ReactComponent as CAKEImg } from "src/assets/tokens/CAKE.svg";
import { ReactComponent as OhmDaiImg } from "src/assets/tokens/OHM-DAI.svg";
import { ReactComponent as HxlBusd } from "src/assets/tokens/HXL-BUSD.svg";
import { ReactComponent as HxlUsdt } from "src/assets/tokens/HXL-USDT.svg";
import { ReactComponent as MTNBNBImg } from "src/assets/tokens/MTN-BNB.svg";
import { ReactComponent as FraxImg } from "src/assets/tokens/FRAX.svg";
import { ReactComponent as OhmFraxImg } from "src/assets/tokens/OHM-FRAX.svg";
import { ReactComponent as OhmLusdImg } from "src/assets/tokens/OHM-LUSD.svg";
import { ReactComponent as OhmEthImg } from "src/assets/tokens/OHM-WETH.svg";
import { ReactComponent as wETHImg } from "src/assets/tokens/wETH.svg";
import { ReactComponent as wbnbImg } from "src/assets/tokens/wBNB.svg";
import { ReactComponent as LusdImg } from "src/assets/tokens/LUSD.svg";
import { ReactComponent as UsdcImg } from "src/assets/tokens/USDC.svg"; 
import { ReactComponent as UsdtImg } from "src/assets/tokens/USDT.svg"; 
import { ReactComponent as BUSDImg } from "src/assets/tokens/BUSD.svg";
import { ReactComponent as HecUsdcImg } from "src/assets/tokens/MTN-USDC.svg";

import { abi as FraxOhmBondContract } from "src/abi/bonds/OhmFraxContract.json";
import { abi as BondOhmDaiContract } from "src/abi/bonds/OhmDaiContract.json";
import { abi as BondwBNBContract } from "src/abi/bonds/wBNBContract.json";

import { abi as HecUsdcContract } from "src/abi/bonds/HecUsdcContract.json";
import { abi as BondOhmLusdContract } from "src/abi/bonds/OhmLusdContract.json";
import { abi as BondOhmEthContract } from "src/abi/bonds/OhmEthContract.json";

import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as ReserveOhmLusdContract } from "src/abi/reserves/OhmLusd.json";
import { abi as ReserveOhmDaiContract } from "src/abi/reserves/OhmDai.json";
import { abi as ReserveHecUsdcContract } from "src/abi/reserves/HecUsdc.json";
import { abi as ReserveMtnBusdContract } from "src/abi/reserves/MtnBusd.json";
import { abi as ReserveOhmFraxContract } from "src/abi/reserves/OhmFrax.json";
import { abi as ReserveOhmEthContract } from "src/abi/reserves/OhmEth.json";
import { abi as FourBondContract } from "src/abi/bonds/FourBond.json";

import { abi as CakeBondContract } from "src/abi/bonds/CakeBondContract.json";
import { abi as FraxBondContract } from "src/abi/bonds/FraxContract.json";
import { abi as LusdBondContract } from "src/abi/bonds/LusdContract.json";
import { abi as EthBondContract } from "src/abi/bonds/EthContract.json";

import { abi as ierc20Abi } from "src/abi/IERC20.json";
import { getBondCalculator } from "src/helpers/BondCalculator";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond

export const busd = new StableBond({
  name: "busd",
  displayName: "BUSD",
  bondToken: "BUSD",
  bondIconSvg: BUSDImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x40A41C03cFA9E8d75a01F75Cc3485ddfB36f75a3",    // Dai Bond Depository address
      reserveAddress: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // Dai address
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});

export const busd4 = new StableBond({
  name: "busd4",
  displayName: "BUSD",
  bondToken: "BUSD",
  bondIconSvg: BUSDImg,
  isFour: true,
  isTotal: true,
  bondContractABI: FourBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x30ED7D1321D30F2Cc2F71023183057f34EA4E560",
      reserveAddress: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});

export const usdc4 = new StableBond({
  name: "usdc4",
  displayName: "USDC",
  bondToken: "USDC",
  bondIconSvg: UsdcImg,
  isFour: true,
  isTotal: true,
  bondContractABI: FourBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xD3eadbCb2B225B9e47Ad08b0878f0dF4bE00dA48",
      reserveAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});


export const hxl_busd = new LPBond({
  name: "hxl_busd_lp",
  displayName: "HXL-BUSD LP",
  bondToken: "BUSD",
  bondIconSvg: HxlBusd,
  bondContractABI: BondOhmDaiContract,
  reserveContract: ReserveOhmDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x3aA4540489a9710041DA053B4dC4445ac338750D",
      reserveAddress: "0xc94364d0ffd3c015689f55e167ac359eb93c617e",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x57612D60B415ad812Da9a7cF5672084796A4aB81",
});


export const hxl_busd4 = new LPBond({
  name: "hxl_busd_lp4",
  displayName: "HXL-BUSD LP",
  bondToken: "BUSD",
  bondIconSvg: HxlBusd,
  isFour: true,
  isTotal: true,
  bondContractABI: FourBondContract,
  reserveContract: ReserveOhmDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xC7DFdDe575472CC537AfabC1fF5F7acf9d8f715E",
      reserveAddress: "0xc94364d0ffd3c015689f55e167ac359eb93c617e",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x57612D60B415ad812Da9a7cF5672084796A4aB81",
});


export const usdt = new StableBond({
  name: "usdt",
  displayName: "USDT",
  bondToken: "USDT",
  bondIconSvg: UsdtImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xA072eA417147B0Cf7793ed5D6128F8CC163B83AA",    // Dai Bond Depository address
      reserveAddress: "0x55d398326f99059fF775485246999027B3197955", // Dai address
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});

export const hxl_usdt = new LPBond({
  name: "hxl_usdt_lp",
  displayName: "HXL-USDT LP",
  bondToken: "USDT",
  bondIconSvg: HxlUsdt,
  bondContractABI: BondOhmDaiContract,
  reserveContract: ReserveOhmDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x66788fa3DD7c32B729f1f4A0418583451AD2C24f",
      reserveAddress: "0xF3CEDC727098e7f812c3b5B227C022B0CD8A48B1",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0x55d398326f99059fF775485246999027B3197955/0x57612D60B415ad812Da9a7cF5672084796A4aB81",
});


export const usdc = new StableBond({
  name: "usdcc",
  displayName: "USDC",
  bondToken: "USDC",
  bondIconSvg: UsdcImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x35bcf2458549e10A04ca4fc96930e71e7Cf8AC70",    // Dai Bond Depository address
      reserveAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", // Dai address
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});


export const dai = new StableBond({
  name: "dai",
  displayName: "DAI",
  bondToken: "DAI",
  bondIconSvg: DAIImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0fE0541d9Ff2EF7558a2972EA0df46EEaC3C6549",    // Dai Bond Depository address
      reserveAddress: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", // Dai address
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});


export const bnb = new CustomBond({
  name: "bnb",
  displayName: "wBNB",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "WBNB",
  bondIconSvg: WBNBImg,
  bondContractABI: EthBondContract,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x03962dA6927cCaF95eEad75c528ed3a398B46DE4",
      reserveAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xca7b90f8158A4FAA606952c023596EE6d322bcf0",
      reserveAddress: "0xc778417e063141139fce010982780140aa0cd5ab",
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    const ethBondContract = this.getContractForBond(networkID, provider);
    let ethPrice = await ethBondContract.assetPrice();
    ethPrice = ethPrice / Math.pow(10, 8);
    const token = this.getContractForReserve(networkID, provider);
    let ethAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    ethAmount = ethAmount / Math.pow(10, 18);
    return ethAmount * ethPrice;
  },
});


export const cake = new CustomBond({
  name: "cake",
  displayName: "CAKE",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "CAKE",
  bondIconSvg: CAKEImg,
  bondContractABI: CakeBondContract ,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x850301a287b3EA4b07928400EE423c5CEb66425E",
      reserveAddress: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xca7b90f8158A4FAA606952c023596EE6d322bcf0",
      reserveAddress: "0xc778417e063141139fce010982780140aa0cd5ab",
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    const CakeBondContract = this.getContractForBond(networkID, provider);
    let ethPrice = await CakeBondContract.assetPrice();
    ethPrice = ethPrice / Math.pow(10, 8);
    const token = this.getContractForReserve(networkID, provider);
    let ethAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    ethAmount = ethAmount / Math.pow(10, 18);
    return ethAmount * ethPrice;
  },
});

// -------------------------------------------end of bond list


export const frax = new StableBond({
  name: "frax",
  displayName: "FRAX",
  bondToken: "FRAX",
  bondIconSvg: FraxImg,
  bondContractABI: FraxBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x10C0f93f64e3C8D0a1b0f4B87d6155fd9e89D08D",
      reserveAddress: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x3aD02C4E4D1234590E87A1f9a73B8E0fd8CF8CCa",
      reserveAddress: "0x45754dF05AA6305114004358eCf8D04FF3B84e26",
    },
  },
});

export const lusd = new StableBond({
  name: "lusd",
  displayName: "LUSD",
  bondToken: "LUSD",
  bondIconSvg: LusdImg,
  bondContractABI: LusdBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x10C0f93f64e3C8D0a1b0f4B87d6155fd9e89D08D",
      reserveAddress: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x3aD02C4E4D1234590E87A1f9a73B8E0fd8CF8CCa",
      reserveAddress: "0x45754dF05AA6305114004358eCf8D04FF3B84e26",
    },
  },
});



export const eth = new CustomBond({
  name: "ftm",
  displayName: "wFTM",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "WFTM",
  bondIconSvg: wETHImg,
  bondContractABI: EthBondContract,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x72De9F0e51cA520379a341318870836FdCaf03B9",
      reserveAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xca7b90f8158A4FAA606952c023596EE6d322bcf0",
      reserveAddress: "0xc778417e063141139fce010982780140aa0cd5ab",
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    const ethBondContract = this.getContractForBond(networkID, provider);
    let ethPrice = await ethBondContract.assetPrice();
    ethPrice = ethPrice / Math.pow(10, 8);
    const token = this.getContractForReserve(networkID, provider);
    let ethAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    ethAmount = ethAmount / Math.pow(10, 18);
    return ethAmount * ethPrice;
  },
});

export const ohm_frax = new LPBond({
  name: "ohm_frax_lp",
  displayName: "OHM-FRAX LP",
  bondToken: "FRAX",
  bondIconSvg: OhmFraxImg,
  bondContractABI: FraxOhmBondContract,
  reserveContract: ReserveOhmFraxContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xc20CffF07076858a7e642E396180EC390E5A02f7",
      reserveAddress: "0x2dce0dda1c2f98e0f171de8333c3c6fe1bbf4877",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x7BB53Ef5088AEF2Bb073D9C01DCa3a1D484FD1d2",
      reserveAddress: "0x11BE404d7853BDE29A3e73237c952EcDCbBA031E",
    },
  },
  lpUrl:
    "https://app.uniswap.org/#/add/v2/0x853d955acef822db058eb8505911ed77f175b99e/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
});







export const mtn_busd = new LPBond({
  name: "MTN_BUSD_lp",
  displayName: "MTN-BUSD LP",
  bondToken: "BUSD",
  bondIconSvg: HxlBusd,
  bondContractABI: BondOhmDaiContract,
  reserveContract: ReserveMtnBusdContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xE02BD1A2c1C00500CD1a0636BD683497A64aCD53",
      reserveAddress: "0xEB9Cb723c7a0621A65D1763c649468cAA6473bbE",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x6dA729C9175A787275a7D49D62FE119881beF2f5",
});

export const mtn_wbnb = new LPBond({
  name: "MTN_BNB_lp",
  displayName: "MTN-BNB LP",
  bondToken: "BNB",
  bondIconSvg: MTNBNBImg,
  bondContractABI: BondwBNBContract,
  reserveContract: ReserveMtnBusdContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xDB654546553143f0Da1b7216853dC9761cC3A8d5",
      reserveAddress: "0x7a43e95c251ddbf26fe3a2af6c3f0d23790dfc8f",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x6dA729C9175A787275a7D49D62FE119881beF2f5",
});

export const hec_dai_v2 = new LPBond({
  name: "hec_dai_lp",
  displayName: "MTN-DAI LP v2",
  bondToken: "DAI",
  bondIconSvg: OhmDaiImg,
  bondContractABI: BondOhmDaiContract,
  reserveContract: ReserveOhmDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x8780bEf1B73Ad4bE4fa653F5bE62A2b6cBCdAf98",
      reserveAddress: "0x6cC9ef078930b3D182C7796ECF5E281fF8fEe316",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
});

export const hec_usdc = new LPBond({
  name: "hec_usdc_lp",
  displayName: "MTN-USDC LP",
  bondToken: "USDC",
  bondIconSvg: HecUsdcImg,
  bondContractABI: HecUsdcContract,
  reserveContract: ReserveHecUsdcContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x3C57481f373Be0196A26A7d0a8E29E8CedC63ba1",
      reserveAddress: "0xd661952749f05acc40503404938a91af9ac1473b",
    },
    [NetworkID.Testnet]: {
      // NOTE (appleseed-lusd): using ohm-dai rinkeby contracts
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://swap.spiritswap.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
});

export const ohm_weth = new CustomBond({
  name: "ohm_weth_lp",
  displayName: "OHM-WETH LP",
  bondToken: "WETH",
  bondIconSvg: OhmEthImg,
  bondContractABI: BondOhmEthContract,
  reserveContract: ReserveOhmEthContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xB6C9dc843dEc44Aa305217c2BbC58B44438B6E16",
      reserveAddress: "0xfffae4a0f4ac251f4705717cd24cadccc9f33e06",
    },
    [NetworkID.Testnet]: {
      // NOTE (unbanksy): using ohm-dai rinkeby contracts
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  bondType: BondType.LP,
  lpUrl:
    "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    if (networkID === NetworkID.Mainnet) {
      const ethBondContract = this.getContractForBond(networkID, provider);
      let ethPrice = await ethBondContract.assetPrice();
      ethPrice = ethPrice / Math.pow(10, 8);
      const token = this.getContractForReserve(networkID, provider);
      const tokenAddress = this.getAddressForReserve(networkID);
      const bondCalculator = getBondCalculator(networkID, provider);
      const tokenAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
      const valuation = await bondCalculator.valuation(tokenAddress, tokenAmount);
      const markdown = await bondCalculator.markdown(tokenAddress);
      let tokenUSD = (valuation / Math.pow(10, 9)) * (markdown / Math.pow(10, 18));
      return tokenUSD * ethPrice;
    } else {
      // NOTE (appleseed): using OHM-DAI on rinkeby
      const token = this.getContractForReserve(networkID, provider);
      const tokenAddress = this.getAddressForReserve(networkID);
      const bondCalculator = getBondCalculator(networkID, provider);
      const tokenAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
      const valuation = await bondCalculator.valuation(tokenAddress, tokenAmount);
      const markdown = await bondCalculator.markdown(tokenAddress);
      let tokenUSD = (valuation / Math.pow(10, 9)) * (markdown / Math.pow(10, 18));
      return tokenUSD;
    }
  },
});

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [busd, usdt, usdc, dai, hxl_busd, bnb, cake, busd4, usdc4, hxl_busd4 ];// bnb, cake
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
