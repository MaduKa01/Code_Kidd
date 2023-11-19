export function getAvatarLetters(name: string | null) {
  if (!name) return;
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    const firstLetters = words[0][0].toUpperCase() + words[1][0].toUpperCase();
    return firstLetters;
  } else if (words.length === 1) {
    const firstLetter = words[0][0].toUpperCase();
    return firstLetter;
  } else {
    return "";
  }
}
