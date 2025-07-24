import type { User } from "./types";

export function formatAddress(raw: string): string {
    const parts = raw?.split(",")?.map((part) => part.trim());
    if (parts?.length === 4) {
      const [street, state, city, zip] = parts;
      return `${street}, ${state}, ${city}, ${zip}`;
    }
    return raw;
}

export const sortUsersByName = (users: User[], order: "asc" | "desc") => {
  return [...users].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (order === "asc") return nameA.localeCompare(nameB);
    return nameB.localeCompare(nameA);
  });
};