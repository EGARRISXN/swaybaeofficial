"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      console.log("Error sending message");
      setLoading(false);
    }
  };

  const resolveAfter2Seconds = new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );
  const notify = () =>
    toast.promise(resolveAfter2Seconds, {
      pending: "Sending message...",
      success: "Message sent successfully!",
      error: "Thee was an error sending your message.",
    });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <form
      className="bg-base-200 border-base-content border-[8px] rounded-3xl shadow-xl shadow-purple-800/50 px-4 xs:px-8 pt-4 pb-4 lg:px-12 lg:pt-8 xl:px-16 xl:pt-12 2xl:px-20"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl lg:text-5xl mt-4 lg:mt-2 xl:mt-0 mb-4 hover:text-info">
        Contact Me!
      </h1>
      <hr className="hr-lines border-secondary my-2" />
      <div className="w-full flex flex-col mt-4 mb-4">
        <label className="font-bold" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          minLength={3}
          maxLength={150}
          required
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="p-3 text-neutral-900 rounded-xl shadow-xl shadow-purple-800/50 "
          autoComplete="on"
          name="name"
          id="name"
        />
      </div>
      <div className="w-full flex flex-col my-4">
        <label className="font-bold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          minLength={5}
          maxLength={150}
          required
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="p-3 text-neutral-900 rounded-xl shadow-xl shadow-purple-800/50       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          autoComplete="on"
          name="email"
          id="email"
        />
      </div>
      <div className="w-full flex flex-col my-4">
        <label className="font-bold" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          minLength={3}
          maxLength={150}
          required
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Subject"
          className="p-3 text-neutral-900 rounded-xl shadow-xl shadow-purple-800/50 "
          autoComplete="on"
          name="subject"
          id="subject"
        />
      </div>
      <div>
        <label className="font-bold " htmlFor="message">
          Message
        </label>
        <textarea
          type="text"
          rows={3}
          required
          minLength={10}
          maxLength={500}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          className="w-full p-3 text-neutral-900 rounded-xl shadow-xl shadow-purple-800/50 "
          name="message"
          id="message"
        />
      </div>
      <hr className="my-6 border-secondary" />
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={notify}
          disabled={loading}
          className="btn btn-md btn-secondary mb-4 mt-2 w-36 2xl:w-44 3xl:w-48 3xl:btn-lg p-3 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-600 text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
