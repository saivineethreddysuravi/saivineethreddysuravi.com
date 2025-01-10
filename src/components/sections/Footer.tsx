"use client";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Sai Vineeth Reddy Suravi. All rights reserved.
        </p>
        <div className="text-gray-600 text-sm">
           Memphis, TN
        </div>
      </div>
    </footer>
  );
}