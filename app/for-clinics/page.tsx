import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold">Built for Clinics</h1>

        <p className="mt-6 text-gray-600">
          AROVIA is designed for solo doctors and small clinics who want
          hospital-level discipline without managing staff and systems daily.
        </p>

        <div className="mt-10 space-y-4 text-gray-600">
          <p>✔ Reduce staff management stress</p>
          <p>✔ Maintain consistent patient experience</p>
          <p>✔ Digital patient records</p>
          <p>✔ Standardized daily operations</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
