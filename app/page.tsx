import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold leading-tight">
          AROVIA
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          We manage clinic operations so doctors can focus on patients.
          From trained staff to digital records and daily SOPs,
          AROVIA brings hospital-level discipline to local clinics.
        </p>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded-md hover:opacity-90">
          Talk to Us
        </button>
      </section>

      {/* Placeholder Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t">
        <h2 className="text-2xl font-semibold">Why AROVIA?</h2>

        <ul className="mt-6 space-y-3 text-gray-600">
          <li>• Professional staff management</li>
          <li>• Digital patient records</li>
          <li>• SOP-driven daily operations</li>
          <li>• Central support & monitoring</li>
        </ul>
      </section>
    </main>
  );
}
