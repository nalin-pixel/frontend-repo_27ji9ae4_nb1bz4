import { Home, Map, ShoppingCart, User, Vote } from "lucide-react";
import { useState } from "react";

const TABS = [
  { key: "map", label: "Xarita", icon: Map },
  { key: "vote", label: "Ovoz", icon: Vote },
  { key: "actions", label: "Aksiyalar", icon: Home },
  { key: "shop", label: "Do‘kon", icon: ShoppingCart },
  { key: "profile", label: "Profil", icon: User },
];

export default function EcoTabs() {
  const [active, setActive] = useState("map");

  return (
    <nav className="fixed bottom-0 inset-x-0 z-20 border-t border-green-100 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-screen-sm grid grid-cols-5">
        {TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex flex-col items-center justify-center gap-1 py-2.5 ${
              active === key ? "text-green-700" : "text-gray-500"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[11px] font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
