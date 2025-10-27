import { useEffect, useState } from "react";
import type { MenuItem } from "@/types/menu";
import { API_ENDPOINTS } from "@/constants/api";
import { categories } from "@/constants/categories";

export function useMenu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(API_ENDPOINTS.MENU);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        const normalized: MenuItem[] = [];

        for (const [category, itemsArray] of Object.entries(data)) {
          if (!Array.isArray(itemsArray)) continue;
          if (!categories.includes(category)) continue;

          const subset = itemsArray.slice(0, 20).map((item, index) => ({
            id: item.id ?? `${category}-${index}`,
            name: item.name ?? "Untitled",
            price: item.price ?? null,
            currency: item.currency ?? null,
            image: item.img ?? null,
            description: item.description ?? null,
            category,
          })) as MenuItem[];

          normalized.push(...subset);
        }

        setItems(normalized);
      } catch (e: unknown) {
        console.error(e);
        const message = e instanceof Error ? e.message : "Failed to fetch menu";
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { items, loading, error };
}
