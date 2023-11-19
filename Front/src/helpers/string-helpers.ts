export const removeNonIntegersFromString = (str: string): string => {
  return str.replace(/\D/g, "");
};

const SPECIAL_CHARACTERS = ["@", "$", "!", "%", "*", "?", "&"];

export const checkIfHasSpecialCharacters = (str: string): boolean => {
  return SPECIAL_CHARACTERS.some((character) => str.includes(character));
};

export const checkIfHasUpperCase = (str: string): boolean => {
  return !!str.match(/[A-Z]/);
};
export const checkIfHasLoweCase = (str: string): boolean => {
  return !!str.match(/[a-z]/);
};
export const checkIfHasNumbers = (str: string): boolean => {
  return /\d/.test(str);
};

export const checkIfIsAllSameDigit = (str: string): boolean => {
  let allSameDigit = true;
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[0]) {
      allSameDigit = false;
      break;
    }
  }
  return allSameDigit;
};
