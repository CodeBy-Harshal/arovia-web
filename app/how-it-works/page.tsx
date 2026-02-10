import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            How AROVIA Works in a Clinic Day
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            AROVIA standardizes daily clinic operations so that staff,
            workflow, and patient experience remain consistent every day.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-28 space-y-16">

          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              1. Clinic Opening & Preparation
            </h3>
            <p className="mt-3 text-gray-600">
              Staff follows standardized opening procedures, equipment checks,
              and preparation checklists to ensure the clinic is ready before
              patients arrive.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              2. Patient Registration & Records
            </h3>
            <p className="mt-3 text-gray-600">
              Patient details and visit information are recorded digitally,
              ensuring complete and accessible medical history.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              3. Vitals & Pre-Consultation
            </h3>
            <p className="mt-3 text-gray-600">
              Staff records vitals and prepares patients before consultation,
              reducing delays and improving consultation efficiency.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              4. Consultation Support
            </h3>
            <p className="mt-3 text-gray-600">
              Doctors access patient history instantly, allowing focused and
              efficient consultations without administrative distractions.
            </p>
          </div>

          {/* Step 5 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              5. Daily Closing & Reporting
            </h3>
            <p className="mt-3 text-gray-600">
              End-of-day procedures ensure records are complete, operations
              are reviewed, and daily performance insights are available.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            What This Means for Doctors
          </h2>

          <div className="mt-10 space-y-4 text-gray-600">
            <p>• Less time spent managing staff</p>
            <p>• More predictable daily workflow</p>
            <p>• Better patient experience</p>
            <p>• Complete digital records and insights</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            See How AROVIA Can Help Your Clinic
          </h2>

          <p className="mt-4 text-gray-600">
            Speak with us to understand how AROVIA can improve your clinic’s
            daily operations.
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
