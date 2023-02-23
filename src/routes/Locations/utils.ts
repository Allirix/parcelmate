export function splitAddress(str: string): { number: string; locationId: string } {
  const regex = /^(?=.*\d).*?\s/;
  const match = str.match(regex);
  if (match) {
    const divider = match[0].length;
    const first = str.slice(0, divider);
    const second = str.slice(divider);

    return { number: first.trim(), locationId: second.trim() };
  }

  return { number: '', locationId: str.trim() };
}

export const a = 0;
