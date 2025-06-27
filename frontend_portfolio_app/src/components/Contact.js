import React, { useState } from "react";

// PUBLIC_INTERFACE
import { motion } from "framer-motion";

function Contact() {
  /** Interactive, visually modern contact form for Sathish. */
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => setSent(true), 700);
  }

  return (
    <section
      id="contact"
      className="px-2 sm:px-4 py-20 md:py-24 bg-gradient-to-tr from-accent/10 via-white dark:via-zinc-900 to-primary/10 transition"
    >
      <motion.div
        className="max-w-xl mx-auto rounded-3xl bg-white/90 dark:bg-zinc-900/95 shadow-2xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.66 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-accent mb-2 animate-fadein-up">Contact Sathish</h2>
        <p className="text-center text-zinc-500 dark:text-zinc-300 mb-7">
          Have a question, idea, or want to work together? Reach out below.
        </p>
        {sent ? (
          <div className="text-center font-semibold text-primary py-12 animate-fadein-up transition">
            ✅ Thanks! Sathish will reply soon.
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="name" className="block text-zinc-700 dark:text-zinc-200 mb-1 font-medium">Your Name</label>
              <input
                id="name" name="name" value={form.name}
                onChange={handleChange} required
                placeholder="What should Sathish call you?"
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 bg-zinc-50 focus:outline-primary focus:ring-accent/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-200 mb-1 font-medium">Email</label>
              <input
                id="email" name="email" value={form.email}
                onChange={handleChange} required type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 bg-zinc-50 focus:outline-primary focus:ring-accent/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-zinc-700 dark:text-zinc-200 mb-1 font-medium">Message</label>
              <textarea
                id="message" name="message" value={form.message}
                onChange={handleChange} required rows={4}
                placeholder="I'd like to work with you on a cool project..."
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 bg-zinc-50 focus:outline-primary focus:ring-accent/20 transition-all"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-accent text-white hover:bg-primary transition-all active:scale-95 motion-reveal"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.04, backgroundColor: "#3B82F6" }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
export default Contact;
