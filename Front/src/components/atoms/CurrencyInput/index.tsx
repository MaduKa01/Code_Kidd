import { TextField, TextFieldProps } from "@mui/material";
import React, { useEffect, useState } from "react";

export const BRAZILLIAN_REAL_SYMBOL: string = "R$";
export const BRAZILLIAN_REAL_DECIMAL_CHARACTER: string = ",";
export const BRAZILLIAN_REAL_THOUSANDS_SEPARATOR: string = ".";

export type CurrencyInputProps = CommonProps &
  TextFieldProps & {
    value: number | unknown;
  };

type CommonProps = {
  prefix?: string;
  thousandsSeparatorSymbol?: string;
  decimalSymbol?: string;
};

const CurrencyInput = ({
  onChange,
  value: propValue = 0,

  variant,

  ...rest
}: CurrencyInputProps) => {
  const newpropValue: number = propValue as number;
  const [numericValue, setNumericValue] = useState<number>(newpropValue * 100); // Convertendo para centavos

  useEffect(() => {
    setNumericValue(newpropValue * 100);
  }, [newpropValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value.replace(/\D/g, ""); // Removendo tudo exceto números
    const numeric = parseInt(newValue, 10) || 0;

    setNumericValue(numeric);

    if (onChange) {
      // Informando o valor numérico para quem está usando o componente
      event.target.value = (numeric / 100).toString();
      onChange(event);
    }
  };

  return (
    <TextField
      {...rest}
      variant={variant ? variant : "standard"}
      value={(numericValue / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
      onChange={handleChange}
    />
  );
};

export default CurrencyInput;
