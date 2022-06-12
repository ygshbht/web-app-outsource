import {
  Map,
  Moon,
  Ethernet,
  CurrencyBitcoin,
  Gift,
  Hammer,
  EnvelopePaper,
  Truck,
  BarChartLine,
  BoxArrowInRight,
} from "react-bootstrap-icons";

const routes = {
  map: {
    link: "/map",
    name: "Map",
    icon: Map,
  },
  connect: {
    link: "/connect",
    name: "Connect",
    icon: Ethernet,
  },
  wallet: {
    link: "/wallet",
    name: "Wallet",
    icon: CurrencyBitcoin,
  },
  marketplaces: {
    link: "/marketplace",
    name: "Marketplace",
    icon: Hammer,
  },
  rewards: {
    link: "/rewards",
    name: "Rewards",
    icon: Gift,
  },
  daoVote: {
    link: "/dao-vote",
    name: "Dao Vote",
    icon: EnvelopePaper,
  },
  leaderboard: {
    link: "/leaderboard",
    name: "Leaderboard",
    icon: BarChartLine,
  },
  launchpad: {
    link: "/launchpad",
    name: "Launchpad",
    icon: Truck,
  },
  backToWebsite: {
    link: "/",
    name: "Back to Website",
    icon: Moon,
  },
  login: {
    link: "/login",
    name: "Login",
    icon: BoxArrowInRight,
  },
};

export default routes;
