import React, { useState } from "react";

// PUBLIC_INTERFACE
function Contact() {
  /** Contact form with floating labels and animated submit. */
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => setSent(true), 650);
  }

  return (
    <section id="contact" className="px-4 py-20 md:py-24 bg-gradient-to-tr from-accent/5 via-white dark:via-zinc-900 to-primary/5">
      <div className="max-w-xl mx-auto rounded-xl bg-white/80 dark:bg-zinc-900/85 shadow-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-accent mb-3">Contact Me</h2>
        <p className="text-center text-zinc-500 dark:text-zinc-300 mb-7">
          Got a question or collaboration idea? Drop a message!
        </p>
        {sent ? (
          <div className="text-center font-semibold text-primary py-12 animate-fadein-up transition">
            ✅ Thanks! I'll reply soon.
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="name" className="block text-zinc-700 dark:text-zinc-200 mb-1 font-medium">Name</label>
              <input
                id="name" name="name" value={form.name}
                onChange={handleChange} required
                className="w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 bg-zinc-50 focus:outline-primary focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-200 mb-1 font-medium">Email</label>
              <input
                id="email" name="email" value={form.email}
                onChange={handleChange} required type="email"
                className="w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 bg-zinc-50 focus:outline-primary focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-zinc-700 dark:text-zinc-200 mb-1 font-medium">Message</label>
              <textarea
                id="message" name="message" value={form.message}
                onChange={handleChange} required rows={4}
                className="w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 bg-zinc-50 focus:outline-primary focus:ring-primary/20"
              />
            </div>
            <button type="submit" className="w-full py-3 rounded font-semibold bg-accent text-white hover:bg-primary transition-all active:scale-95">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
export default Contact;
