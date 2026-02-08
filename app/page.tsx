import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Clinic Operations, Simplified.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          AROVIA manages clinic operations end-to-end — staff, digital records,
          daily SOPs, and workflows — so doctors can focus entirely on
          patient care.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-md hover:opacity-90"
          >
            Talk to Us
          </a>

          <a
            href="/how-it-works"
            className="border px-6 py-3 rounded-md hover:bg-gray-50"
          >
            How it Works
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Currently piloting with local clinics.
        </p>
      </section>

      {/* Why AROVIA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-semibold">Why AROVIA?</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8 text-gray-600">
          <div>✔ Professional staff management</div>
          <div>✔ Digital patient records</div>
          <div>✔ SOP-driven daily operations</div>
          <div>✔ Central support & monitoring</div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-semibold">Who We Are</h2>

        <p className="mt-6 text-gray-600 max-w-3xl">
          AROVIA is a healthcare operations platform focused on helping
          clinics run with hospital-level discipline. We specialize in
          staff management, standardized workflows, and digital patient
          records so doctors can focus entirely on patient care.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-semibold">Our Mission</h2>

        <p className="mt-6 text-gray-600 max-w-3xl">
          Our mission is to bring professional operations and modern
          systems to every local clinic, improving patient experience
          while reducing the daily burden on doctors.
        </p>
      </section>

      <Footer />
    </main>
  );
}
