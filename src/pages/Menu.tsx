import { useState, useMemo } from "react";
import { useMenu } from "@/hooks/useMenu.ts";
import MenuItems from "@/components/MenuItems";
import { categories } from "@/constants/categories";

export default function Menu() {
  const { items, loading, error } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categories[0]);

  const menuItems = useMemo(() => {
    if (!selectedCategory) return items;

    return items.filter((item) => (item.category ?? "Other") === selectedCategory);
  }, [items, selectedCategory]);

  return (
    <>
      <section id="menu" className="container mx-auto flex flex-col items-center px-6 py-16">
        <h2 className="mb-4 text-3xl uppercase">Menu</h2>

        {loading && <div>Loading menu…</div>}
        {error && <div className="text-red-500">Error: {error}</div>}

        {!loading && !error && (
          <section className="container mx-auto flex flex-col items-center px-6">
            {/* Dropdown for small & medium screens */}
            <div className="sticky top-16 z-50 w-full pb-4 pt-2 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur md:hidden">
              <select
                value={selectedCategory ?? ""}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full cursor-pointer rounded-md border border-gray-300 bg-transparent px-3 py-2 capitalize text-gray-700 outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Button bar for large screens */}
            <div className="sticky top-16 z-50 hidden justify-center gap-3 overflow-x-auto pb-10 pt-2 outline-none backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur md:flex">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative w-[150px] cursor-pointer border-0 bg-transparent px-4 py-2 capitalize transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-full ${
                    selectedCategory === category
                      ? "after:h-[6px] after:translate-y-[2px] after:bg-black after:transition-all after:duration-300"
                      : "after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div
              key={selectedCategory}
              className="animate-fadeIn mt-4 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {menuItems.map((item) => (
                <MenuItems key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </section>
    </>
  );
}
