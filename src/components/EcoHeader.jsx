import { Leaf } from "lucide-react";

export default function EcoHeader() {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-green-100">
      <div className="mx-auto max-w-screen-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-green-100 text-green-700">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-gray-800 leading-none">ZAMINAT.eco</p>
            <p className="text-xs text-gray-500 leading-none">Recycle • Vote • Act</p>
          </div>
        </div>
        <button
          className="text-xs font-medium px-3 py-1.5 rounded-md border border-green-200 text-green-700 hover:bg-green-50 transition-colors"
          onClick={() => {
            // Simple hint for PWA install; real logic would handle beforeinstallprompt
            alert("Install from your browser menu to add ZAMINAT.eco to your home screen.");
          }}
        >
          Install
        </button>
      </div>
    </header>
  );
}
