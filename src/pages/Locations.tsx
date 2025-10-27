import { useState } from "react";
import type { Location } from "@/types/location";
import { locations } from "@/constants/locations";

export default function Locations() {
  const [selected, setSelected] = useState<Location>(locations[0]);

  const src = `https://www.google.com/maps?q=${encodeURIComponent(selected.address)}&output=embed`;

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="mb-4 text-3xl font-bold">Locations</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-3 md:col-span-1">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelected(location)}
              className={`block w-full rounded-lg p-3 text-left ${selected.id === location.id ? "bg-gray-600 text-white" : "bg-gray-50"}`}
            >
              <div className="font-semibold">{location.name}</div>
              <div className="text-sm">{location.address}</div>
              <div className="mt-1 text-xs">{location.hours}</div>
            </button>
          ))}
        </div>

        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-lg shadow">
            <iframe title="map" src={src} className="h-96 w-full border-0" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
