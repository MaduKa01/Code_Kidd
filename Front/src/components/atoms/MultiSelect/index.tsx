import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  useTheme,
} from "@mui/material";
import React from "react";

import { MultiSelectMessages } from "@/messages/inputs/multi-select.messages";
import { SelectData } from "@/types/form.types";

type MultiSelectProps<T = string> = {
  options: SelectData<string>[];
  label: string;
  value: T[];
  onChange: (value: T[]) => void;
  limit?: number;
  error?: string[] | string;
  messages?: MultiSelectMessages;
};

export default function MultiSelect<T>({
  options,
  label,
  value,
  onChange,
  limit,
  error,
  messages,
}: MultiSelectProps<T>) {
  const {
    multiSelectTooltipWarning1 = "You can only select up to ",
    multiSelectTooltipWarning2 = "options",
  } = messages || {};
  const {
    fontColors: { disabled, title },
  } = useTheme();
  const handleChange = (event: SelectChangeEvent<T[]>) => {
    const selectedOptions = event.target.value as T[];
    const isOnLimit = limit && selectedOptions.length > limit;
    if (isOnLimit) return;

    onChange(selectedOptions);
  };

  const tooltipMessage = `${multiSelectTooltipWarning1} ${limit} ${multiSelectTooltipWarning2}`;

  const renderValue = (selected: T[]): string => {
    let valueToRender = "";

    selected.forEach((itemSelected) => {
      const item = options.find((_item) => _item.value === itemSelected);
      const itemLabel = item?.label;
      const shouldRenderComma = valueToRender.length > 0;
      valueToRender = `${valueToRender}${shouldRenderComma ? "," : ""} ${itemLabel}`;
    });
    return valueToRender;
  };
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        multiple
        value={Array.isArray(value) ? value : []}
        onChange={handleChange}
        renderValue={(selected) => renderValue(selected)}
      >
        {options.map((option, index) => {
          const { label, value: optionValue } = option;
          const isSelected = value.indexOf(optionValue as T) > -1;
          const isOnLimit = limit && (Array.isArray(value) ? value : []).length === limit;
          const showTooltip = !!isOnLimit && !isSelected;
          const color = showTooltip ? disabled : title;
          return (
            <MenuItem value={optionValue} key={`${label} - ${index}`}>
              <Tooltip title={showTooltip && tooltipMessage} arrow style={{ width: "100%" }}>
                <Box display="flex" alignItems={"center"}>
                  <Checkbox checked={isSelected} disabled={showTooltip} />
                  <ListItemText primary={label} style={{ color }} />
                </Box>
              </Tooltip>
            </MenuItem>
          );
        })}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
