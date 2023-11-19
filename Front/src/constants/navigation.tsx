import AccountCircle from "@mui/icons-material/AccountCircle";
import ReceiptLong from "@mui/icons-material/ReceiptLong";

import { NavigationListItem } from "@/components/molecules/NavigationList/types";

import ROUTE_URLS from "./route-urls";

type ProfileInnerNavigationProps = {
  permissionsLabel: string;
  profileLabel: string;
  changePasswordLabel: string;
};

export type ProfileNavigationIds = "profile" | "permissions" | "change-password";

export const profileInnerNavigationItems = ({
  profileLabel,
  permissionsLabel,
}: ProfileInnerNavigationProps): NavigationListItem<ProfileNavigationIds>[] => {
  return [
    {
      _id: "profile",
      title: profileLabel,
      icon: <AccountCircle />,
      selectedIcon: <AccountCircle color="primary" />,
      href: ROUTE_URLS.profile,
    },
    {
      _id: "permissions",
      title: permissionsLabel,
      icon: <ReceiptLong />,
      selectedIcon: <ReceiptLong color="primary" />,
      href: ROUTE_URLS.permissions,
    },
  ];
};
