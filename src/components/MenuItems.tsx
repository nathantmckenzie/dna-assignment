import type { MenuItem } from "@/types/menu";

export default function MenuItems({ item }: { item: MenuItem }) {
  return (
    <div className="flex-1 p-7">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold capitalize">{item.name}</h3>
        <div className="pl-10 text-sm text-gray-600">{item.price}</div>
      </div>
      <p className="mt-1 line-clamp-2 text-sm text-gray-500">{item.description}</p>
    </div>
  );
}
