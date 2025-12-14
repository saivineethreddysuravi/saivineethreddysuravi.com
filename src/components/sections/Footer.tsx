"use client";

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
             <span className="font-extrabold text-xl text-[#1273eb]">fp</span>
             <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Sai Vineeth Reddy Suravi.
             </p>
        </div>
        
        <div className="flex gap-6 text-sm text-slate-500 font-medium">
             <a href="#" className="hover:text-[#1273eb]">Terms</a>
             <a href="#" className="hover:text-[#1273eb]">Privacy</a>
             <a href="#" className="hover:text-[#1273eb]">Cookies</a>
        </div>
        
        <div className="text-slate-400 text-sm">
           Made in Memphis, TN
        </div>
      </div>
    </footer>
  );
}
