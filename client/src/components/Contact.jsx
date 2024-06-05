import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Web Wizard",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center m-5 md:m-0 h-full">
      <h1 className="text-2xl font-medium mb-4">Contact</h1>
      <div className="bg-grey p-6 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              className="bg-white w-full px-3 py-2 border border-grey rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="bg-white w-full px-3 py-2 border border-grey rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white  w-full px-3 py-2 border border-grey rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="btn-dark w-full">
            Send Message
          </button>
        </form>
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default Contact;
