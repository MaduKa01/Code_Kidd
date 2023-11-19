import { useState } from "react";

type TUsePopOverReturn<T> = {
  isOpen: boolean;
  selected?: T;
  anchorEl: (EventTarget & HTMLButtonElement) | null;
  openPopover: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, select: T) => void;
  closePopover: () => void;
};

function usePopOver<T>(): TUsePopOverReturn<T> {
  const [isVisible, setIsVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const [selected, setSelected] = useState<T>();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: T) => {
    event.stopPropagation();
    setSelected(item);
    setIsVisible(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSelected(undefined);
    setAnchorEl(null);
    setIsVisible(false);
  };
  return {
    isOpen: isVisible,
    anchorEl,
    selected,
    openPopover: handleOpen,
    closePopover: handleClose,
  };
}

export default usePopOver;
