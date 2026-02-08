export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-xl font-semibold">
          AROVIA
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#" className="hover:text-black">How it Works</a>
          <a href="#" className="hover:text-black">For Clinics</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>

        {/* CTA */}
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
          Talk to Us
        </button>

      </div>
    </nav>
  );
}
