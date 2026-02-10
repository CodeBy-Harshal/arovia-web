import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForClinics() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Built for Clinics
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            AROVIA helps clinics operate with hospital-level discipline —
            without increasing the doctor's workload.
          </p>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            Challenges Most Clinics Face
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12 text-gray-700 max-w-3xl mx-auto">
            <p>• Staff reliability and training issues</p>
            <p>• Paper records and missing history</p>
            <p>• Daily operations depend on the doctor</p>
            <p>• Inconsistent patient experience</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            What Changes with AROVIA
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-gray-900">
                Professional Operations
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                Staff training, SOPs, and daily checklists ensure
                predictable and smooth clinic functioning.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-gray-900">
                Digital Records
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                Patient visits and history are securely stored
                and instantly accessible.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-gray-900">
                Less Daily Stress
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                Doctors focus on treatment while AROVIA
                manages the operational side.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            How It Works
          </h2>

          <div className="max-w-3xl mx-auto mt-12 space-y-6 text-gray-700">
            <p>1. We study your clinic workflow.</p>
            <p>2. We standardize daily operations and staff processes.</p>
            <p>3. We implement digital systems and monitoring.</p>
            <p>4. Continuous improvement and operational support.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Interested in Improving Your Clinic?
          </h2>

          <p className="mt-4 text-gray-600">
            Speak with us to explore how AROVIA can help your clinic.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Talk to Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
