"use client";
import React, { useState } from "react";

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

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <form
      className="bg-base-200 border-base-content border-4 rounded-3xl shadow-xl shadow-purple-800/50 px-4 xs:px-8 py-4 lg:px-12 lg:py-8 xl:px-16 xl:py-12 2xl:px-20 2xl:py-16"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl text-center mt-1 mb-3 lg:mb-6">Contact me!</h1>
      <div className="w-full flex flex-col mb-4">
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
          className="p-3 lg:p-4 text-neutral-900 rounded-xl shadow-xl shadow-purple-800/50 "
          autoComplete="off"
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
          className="p-3 lg:p-4 text-neutral-900 rounded-xl shadow-xl shadow-purple-800/50 "
          autoComplete="off"
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
          className="p-3 lg:p-4 text-neutral-900 rounded-xl shadow-xl shadow-purple-800/50 "
          autoComplete="off"
          name="subject"
          id="subject"
        />
      </div>
      <div>
        <label className="font-bold" htmlFor="message">
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
          className="w-full p-3 lg:p-4 text-neutral-900 rounded-xl shadow-xl shadow-purple-800/50 "
          name="message"
          id="message"
        />
      </div>
      <div className="flex justify-center xs:justify-end">
        <button
          type="submit"
          disabled={loading}
          className="mb-2 lg:mb-0 mt-4 lg:mt-6 w-30 sm:w-40 btn btn-secondary btn-sm xs:btn-md"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
