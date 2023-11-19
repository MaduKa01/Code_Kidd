// MobileSubMenuItem.tsx
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

import useLanguage from "@/contexts/language-context";
import { Language } from "@/types/language.types";
import { SideBarIds, SideBarItem } from "@/types/side-bar.types";

import { BottomBarListItem, ListItemContainer } from "../MobileMenu/styles";

type MobileSubMenuItemProps = {
  subItem: SideBarItem;
  isSelected: boolean;
};

const MobileSubMenuItem = ({ subItem, isSelected }: MobileSubMenuItemProps) => {
  const router = useRouter();
  const { lang } = useLanguage();

  const onClickSubItem = (_id: SideBarIds, url: (lang: Language) => string) => {
    if (url) router.push(url(lang));
  };

  return (
    <ListItemContainer style={{ paddingLeft: "30px" }}>
      <BottomBarListItem
        isSelected={isSelected}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
          if (subItem.url) {
            onClickSubItem(subItem._id, subItem.url);
          }
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon style={{ minWidth: 35 }}>
            <Typography color="secondary" fontSize={15.5}>
              {subItem.text.charAt(0)}
            </Typography>
          </ListItemIcon>
          <Typography color="secondary" fontSize={15.5}>
            {subItem.text}
          </Typography>
        </div>
      </BottomBarListItem>
    </ListItemContainer>
  );
};

export default MobileSubMenuItem;
