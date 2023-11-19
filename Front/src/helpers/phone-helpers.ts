export function formatPhoneNumber(phoneNumberString: string) {
  const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    return "+" + match[1] + " (" + match[2] + ") " + match[3] + "-" + match[4];
  }

  return phoneNumberString;
}

export function buildFullPhone(ddd: string, phone: string) {
  return `${ddd}${phone}`;
}

export function getPhoneDDD(phoneNumber: string) {
  const rawNumber = phoneNumber.replace(/\D/g, "");
  const ddd = rawNumber.substring(0, 2);
  return ddd;
}

export function getPhoneWithoutDDD(phoneNumber: string) {
  const rawNumber = phoneNumber.replace(/\D/g, "");
  const number = rawNumber.substring(2);
  return number;
}

export function buildPhoneProperties(phoneNumber: string): { ddd: string; phone: string } {
  const ddd = getPhoneDDD(phoneNumber);
  const phone = getPhoneWithoutDDD(phoneNumber);

  return { ddd, phone };
}
