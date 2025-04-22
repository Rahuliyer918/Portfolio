import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import contactAnimation from '../assets/Contact.json';
import contactMe from '../assets/ContactMe.json';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeogjwwr");

  return (
    <section id="contact" className="py-16 px-6 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] text-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Form Card */}
        <div className="flex-1 max-w-xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-400 text-left monsieur-la-doulaise-regular">
            <div className="flex-1 max-w-[300px]">
              <Lottie animationData={contactMe} loop={true} />
            </div>
          </h2>
          {state.succeeded ? (
            <div className="bg-green-600 text-white p-6 rounded-xl shadow-md text-center">
              <p className="text-xl font-semibold">Thank you! Your message has been sent.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto bg-[#1f1f2e] p-8 rounded-xl shadow-md space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-left text-gray-300">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded bg-[#2a2a40] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-left font-semibold text-gray-300">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded bg-[#2a2a40] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-left font-semibold text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded bg-[#2a2a40] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded text-lg font-semibold transition disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Animation */}
        <div className="flex-1 max-w-[700px]">
          <Lottie animationData={contactAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;