export const formatDate = (date: Date): string => {
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
};

export function convertTimestampToISO(timestamp: string) {
  if (String(timestamp).length === 10) {
    return new Date(Number(timestamp) * 1000).toISOString();
  }
  return timestamp;
}
