// MobileMenu.tsx
import { useHookstate } from "@hookstate/core";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import bottomBarState, { toggleMenuItem, toggleMobileMenu } from "@/states/bottom-bar";
import { SideBarItem } from "@/types/side-bar.types";

import { BoxContainer, ListContainer } from "./styles";
import MobileMenuItem from "../MobileMenuItem";

type MobileMenuProps = {
  items: SideBarItem[];
};

const MobileMenu: React.FC<MobileMenuProps> = ({ items }) => {
  const { openedMenuItems } = useHookstate(bottomBarState).get({ noproxy: true });

  return (
    <BoxContainer
      role="presentation"
      onClick={() => toggleMobileMenu(false)}
      onKeyDown={() => toggleMobileMenu(false)}
    >
      <IconButton
        onClick={() => toggleMobileMenu(false)}
        sx={{ position: "absolute", right: 0, top: 0 }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <ListContainer>
        {items.map((item, index) => {
          if (item.ingnoreOnMenu) return null;
          return (
            <MobileMenuItem
              key={index}
              item={item}
              isOpen={openedMenuItems[index] || false}
              onItemSelected={() => toggleMenuItem(index)}
            />
          );
        })}
      </ListContainer>
    </BoxContainer>
  );
};

export default MobileMenu;
