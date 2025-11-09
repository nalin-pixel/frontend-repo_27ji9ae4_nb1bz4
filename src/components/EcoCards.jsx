import { ArrowRight, MapPin, Trophy, Vote } from "lucide-react";

export default function EcoCards() {
  return (
    <section className="mx-auto max-w-screen-sm px-4 pb-24">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Bugungi vazifalar</h2>
      <div className="grid grid-cols-1 gap-3">
        <Card
          title="Yaqin atrofdagi yig‘im nuqtalarini ko‘ring"
          description="Plastik va shinalar qabul qilinadigan joylar"
          icon={<MapPin className="h-5 w-5" />}
          cta="Xaritaga o‘tish"
        />
        <Card
          title="Sevimli loyiha uchun ovoz bering"
          description="Eko-balllaringizni ishlatib jamiyatni qo‘llab-quvvatlang"
          icon={<Vote className="h-5 w-5" />}
          cta="Ovoz berish"
        />
        <Card
          title="Ball to‘plang, darajani oshiring"
          description="Aksiyalarda qatnashing va yutuqlarni oching"
          icon={<Trophy className="h-5 w-5" />}
          cta="Profilga o‘tish"
        />
      </div>
    </section>
  );
}

function Card({ title, description, icon, cta }) {
  return (
    <div className="rounded-xl border border-green-100 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-lg bg-green-50 p-2 text-green-700">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-800">
            <span>{cta}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
