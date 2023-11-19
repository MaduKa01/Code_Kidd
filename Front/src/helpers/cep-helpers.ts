export function formatZipCode(zipCode: string): string {
  if (zipCode.length === 8) {
    return `${zipCode.substring(0, 5)}-${zipCode.substring(5, 8)}`;
  }
  return zipCode;
}
