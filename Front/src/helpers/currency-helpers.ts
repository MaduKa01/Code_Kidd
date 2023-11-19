import currency from "currency.js";

export function formatCurrency(value: number, locale: string = "pt-BR", currency: string = "BRL") {
  if (isNaN(value)) {
    return new Intl.NumberFormat(locale, { style: "currency", currency: currency }).format(0);
  }

  const fixedValue = parseFloat(value.toFixed(2));
  return new Intl.NumberFormat(locale, { style: "currency", currency: currency }).format(
    fixedValue
  );
}

export function convertCurrencyToNumber(value: string | unknown): number | undefined | unknown {
  if (typeof value !== "string") return value;

  return currency(value.replace("R$", "").trim()).value;
}
