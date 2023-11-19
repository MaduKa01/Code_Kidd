import { useHookstate } from "@hookstate/core";
import { useTheme } from "@mui/material";
import { ListItemIcon, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/navigation";

import useLanguage from "@/contexts/language-context";
import sideBarState, { selectSideBarItem } from "@/states/side-bar";
import { SideBarItem as SideBarItemType } from "@/types/side-bar.types";

import { SideBarListItem } from "../MainMenuItems/styles";

type SubMenuItemProps = {
  subItem: SideBarItemType;
};

export default function SubMenuItem({ subItem }: SubMenuItemProps) {
  const { selectedItem } = useHookstate(sideBarState).get({ noproxy: true });
  const router = useRouter();
  const { lang } = useLanguage();
  const {
    margins: { xs },
  } = useTheme();

  const { text, _id, url = "" } = subItem;
  const firstLetter = text.charAt(0);

  const isSelected = selectedItem === _id;
  const onClickItem = () => {
    selectSideBarItem(_id);
    if (url) router.push(url(lang));
  };

  return (
    <Grid md={1} xs={1} sm={1} lg={1} sx={{ marginTop: 0.5 }}>
      <SideBarListItem
        isSelected={isSelected}
        onClick={onClickItem}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: xs,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon style={{ minWidth: 35 }}>
            <Typography color="text.secondary" fontSize={15.5}>
              {firstLetter}
            </Typography>
          </ListItemIcon>
          <Typography sx={{ color: "black" }} fontSize={15.5}>
            {text}
          </Typography>
        </div>
      </SideBarListItem>
    </Grid>
  );
}
