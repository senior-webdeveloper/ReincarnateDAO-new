import { ReactComponent as ForumIcon } from "../../assets/icons/forum.svg";
import { ReactComponent as GovIcon } from "../../assets/icons/governance.svg";
import { ReactComponent as DocsIcon } from "../../assets/icons/docs.svg";
import { ReactComponent as SpookySwapIcon } from "../../assets/icons/spookyswap.svg";
import { ReactComponent as DexToolsIcon } from "../../assets/icons/dextools.svg";
import { ReactComponent as SpiritSwapIcon } from "../../assets/icons/spiritswap.svg";
import { ReactComponent as FeedbackIcon } from "../../assets/icons/feedback.svg";
import { SvgIcon } from "@material-ui/core";
import { AccountBalanceOutlined, MonetizationOnOutlined } from "@material-ui/icons";

const externalUrls = [
  // {
  //   title: "Forum",
  //   url: "https://forum.app.hectordao.com/",
  //   icon: <SvgIcon color="primary" component={ForumIcon} />,
  // },
  // {
  //   title: "Governance",
  //   url: "https://vote.app.hectordao.com/",
  //   icon: <SvgIcon color="primary" component={GovIcon} />,
  // },
  {
    title: "Buy on PancakeSwap",
    url: "https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0x57612D60B415ad812Da9a7cF5672084796A4aB81",
    icon: <SvgIcon viewBox="0 0 64 64" color="primary" component={SpookySwapIcon} />,
  },

  {
    title: "View on Dextool",
    url: "https://www.dextools.io/app/bsc/pair-explorer/0xc94364d0ffd3c015689f55e167ac359eb93c617e",
    icon: <SvgIcon viewBox="0 0 64 64" color="primary" component={DexToolsIcon} />,
  },

  // {
  //   title: "Buy on mountain.finance",
  //   url: "https://swap.spiritswap.finance/#/exchange/swap/0x5c4fdfc5233f935f20d2adba572f770c2e377ab0",
  //   icon: <SvgIcon viewBox="0 0 250 250" color="primary" component={SpiritSwapIcon} />,
  // },
  {
    title: "Hexal Lend",
    label: "(Coming soon)",
    icon: <MonetizationOnOutlined viewBox="0 0 20 24" />,
  },
  {
    title: "Hexal Borrow",
    label: "(Coming soon)",
    icon: <MonetizationOnOutlined viewBox="0 0 20 24" />,
  },
  {
    title: "Hexal PRO",
    label: "(Coming soon)",
    icon: <AccountBalanceOutlined viewBox="0 0 20 24" />,
  },
  {
    title: "Governance",
    url: "https://snapshot.org/#/hexaldao.eth",
    icon: <SvgIcon color="primary" component={GovIcon} />,
  },
  {
    title: "Docs",
    url: "https://hexaldao.gitbook.io/hexaldao/",
    icon: <SvgIcon color="primary" component={DocsIcon} />,
  },
  // {
  //   title: "Feedback",
  //   url: "https://olympusdao.canny.io/",
  //   icon: <SvgIcon color="primary" component={FeedbackIcon} />,
  // },
];

export default externalUrls;
