import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold">Contact AROVIA</h1>

        <p className="mt-6 text-gray-600">
          If you are a clinic owner or doctor interested in improving
          your clinic operations, reach out to us.
        </p>

        <div className="mt-8 space-y-2 text-gray-700">
          <p>Email: hello@arovia.in</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
