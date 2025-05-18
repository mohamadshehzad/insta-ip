'use client';

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="mb-4">
        Got a question, suggestion, or just want to say hello? We’d love to hear from you!
        Whether you have feedback about our IP tools, want to report a bug, or wish to collaborate — just drop us a message.
      </p>

      <p className="mb-4">
        You can also email us directly at: <br />
        <strong className="text-blue-600">contact@insta-ip.com</strong>
      </p>

      <form
        className="bg-white p-6 rounded-lg shadow-md mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This is a demo form. Connect it to Formspree, Getform, or an API route to make it functional.");
        }}
      >
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
