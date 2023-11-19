import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BookIcon from "@mui/icons-material/Book";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { SidebarMessages } from "@/messages/layout/sidebar";
import { Language } from "@/types/language.types";
import { SideBarItem } from "@/types/side-bar.types";

import ROUTE_URLS from "./route-urls";

const SIDE_BAR_ITEMS = (messages: SidebarMessages): SideBarItem[] => [
  {
    text: messages.dashboards,
    _id: "dashboard",
    icon: <DashboardIcon color="secondary" />,
    subItems: [
      {
        text: messages.dashboard,
        _id: "dashboard",
        icon: <DashboardIcon color="secondary" />,
        url: (lang: Language) => ROUTE_URLS.dashboard(lang),
      },
    ],
  },
  {
    text: messages.courses,
    _id: "courses",
    icon: <BookIcon color="secondary" />,
    subItems: [
      {
        text: messages.courses,
        _id: "courses",
        icon: <BookIcon color="secondary" />,
        url: (lang: Language) => ROUTE_URLS.courses(lang),
      },
    ],
  },
  {
    text: messages.account,
    _id: "account",
    icon: <AccountCircleIcon color="secondary" />,
    subItems: [
      {
        text: messages.account,
        _id: "account",
        icon: <AutorenewIcon color="secondary" />,
        url: (lang: Language) => ROUTE_URLS.profile(lang),
      },
    ],
  },
];

export default SIDE_BAR_ITEMS;
