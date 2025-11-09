import EcoHeader from "./components/EcoHeader";
import EcoHero from "./components/EcoHero";
import EcoCards from "./components/EcoCards";
import EcoTabs from "./components/EcoTabs";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-white text-gray-900">
      <EcoHeader />
      <main className="pt-2">
        <EcoHero />
        <EcoCards />
      </main>
      <EcoTabs />
    </div>
  );
}

export default App;
