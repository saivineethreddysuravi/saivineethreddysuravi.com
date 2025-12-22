"use client";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
             <span className="font-extrabold text-xl text-white">SV</span>
             <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Sai Vineeth Reddy Suravi.
             </p>
        </div>
        
        <div className="flex gap-6 text-sm text-slate-400 font-medium">
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        
        <div className="text-slate-600 text-sm">
           Made in Memphis, TN
        </div>
      </div>
    </footer>
  );
}
