import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">

        {/* Right Image */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <img
            src="/hero.jpg"
            alt="Doctor and nurse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/15 to-transparent"></div>
        </div>

        {/* Text */}
        <div className="max-w-7xl mx-auto px-6 py-32 relative">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold tracking-tight leading-tight text-gray-900">
              Clinic Operations,
              <br />
              Simplified.
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              AROVIA manages clinic operations end-to-end — trained staff,
              digital records, and daily protocols — so doctors can focus
              entirely on patient care.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-md text-sm hover:opacity-90 transition"
              >
                Talk to Us
              </a>

              <a
                href="/how-it-works"
                className="border border-gray-300 px-6 py-3 rounded-md text-sm hover:bg-gray-50 transition"
              >
                How it Works
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Currently piloting with local clinics.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-gray-500 text-sm">
          Designed for modern clinics • SOP Driven Operations • Digital Records • Staff Management
        </div>
      </section>

      {/* WHY AROVIA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Clinics Choose AROVIA
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {[
              "Professional staff management",
              "SOP-driven daily operations",
              "Digital patient records",
              "Centralized monitoring & reporting"
            ].map((text, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border bg-white hover:shadow-md transition"
              >
                <p className="text-gray-700 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
              AROVIA brings hospital-level operational discipline to local clinics.
              We combine trained staff, standardized workflows, and digital systems
              to help clinics run efficiently and professionally.
            </p>
          </div>

          <div className="relative h-[340px] w-full overflow-hidden rounded-xl">
            <img
              src="/hero.jpg"
              alt="Clinic workflow"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We aim to transform local clinics by implementing modern
            management practices and technology — ensuring every patient
            receives dedicated, efficient, and professional care.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
