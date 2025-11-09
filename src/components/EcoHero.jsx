import { MapPin, ShoppingBag, Trophy, Vote } from "lucide-react";

export default function EcoHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-screen-sm px-4 pt-10 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Qurish. Tozalash. Qayta ishlash.
        </h1>
        <p className="mt-3 text-gray-600">
          ZAMINAT.eco — O‘zbekiston uchun mobil PWA. Qayta ishlash nuqtalarini toping,
          jamiyat loyihalariga ovoz bering, aksiyalarga qo‘shiling, do‘kondan xarid qiling
          va eko-ball to‘plang.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Feature icon={<MapPin className=\"h-4 w-4\" />} label="Xarita" />
          <Feature icon={<Vote className=\"h-4 w-4\" />} label="Ovoz" />
          <Feature icon={<Trophy className=\"h-4 w-4\" />} label="Mukofotlar" />
          <Feature icon={<ShoppingBag className=\"h-4 w-4\" />} label="Do‘kon" />
        </div>
      </div>
      <Gradient />
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-green-100 bg-white/60 px-3 py-2">
      <span className="text-green-700">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
}

function Gradient() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
      <div className="absolute -top-24 right-1/2 h-64 w-64 translate-x-1/2 rounded-full bg-green-200 opacity-40 blur-3xl" />
      <div className="absolute -bottom-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-200 opacity-40 blur-3xl" />
    </div>
  );
}
