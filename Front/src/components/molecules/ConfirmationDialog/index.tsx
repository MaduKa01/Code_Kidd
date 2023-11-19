"use client";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
} from "@mui/material";

import Button from "@/components/atoms/Button";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  titleText: string;
  descriptionText: string;
  cancelText: string;
  confirmText: string;
  isLoading?: boolean;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  titleText,
  descriptionText,
  cancelText,
  confirmText,
  isLoading = false,
}) => {
  const {
    margins: { xxxs },
  } = useTheme();
  return (
    <Dialog open={isOpen} onClose={onClose} style={{ padding: xxxs }}>
      <DialogTitle>{titleText}</DialogTitle>
      <DialogContent>
        <Typography>{descriptionText}</Typography>
      </DialogContent>
      <DialogActions style={{ padding: xxxs }}>
        <Button mode="outlined" fullWidth onClick={onClose} disabled={isLoading}>
          {cancelText}
        </Button>
        <Button mode="contained" fullWidth onClick={onConfirm}>
          {isLoading ? <CircularProgress color="secondary" size={20} /> : confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
