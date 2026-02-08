import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold">
          AROVIA
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-gray-700">
          <Link href="/how-it-works">How it Works</Link>
          <Link href="/for-clinics">For Clinics</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/contact"
          className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
        >
          Talk to Us
        </Link>
      </div>
    </nav>
  );
}
