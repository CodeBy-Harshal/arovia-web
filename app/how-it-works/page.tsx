import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold">How AROVIA Works</h1>

        <div className="mt-10 space-y-8 text-gray-600">
          <p>
            AROVIA partners with clinics to standardize daily operations,
            improve staff discipline, and digitize patient workflows.
          </p>

          <ol className="space-y-4">
            <li>1. We assess your clinic operations and workflow.</li>
            <li>2. We deploy trained staff and standardized SOPs.</li>
            <li>3. Patient records and visits are digitized.</li>
            <li>4. Daily operations are monitored and improved.</li>
            <li>5. Doctors focus entirely on treatment.</li>
          </ol>
        </div>
      </section>

      <Footer />
    </main>
  );
}
