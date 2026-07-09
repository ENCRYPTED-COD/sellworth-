export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-brand-wine mb-4">
          Thank You!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Your enquiry has been received successfully.
          <br />
          Our luxury property consultant will get in touch with you shortly.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-dark hover:opacity-90 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}