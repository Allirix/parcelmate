export function updateJSON<T extends object>(current: T, values: Partial<T>): T {
  const updated = { ...current };
  Object.entries(values).forEach(([key, value]) => {
    updated[key as keyof T] = value as T[keyof T];
  });
  return updated;
}

export function test() {
  return '';
}
