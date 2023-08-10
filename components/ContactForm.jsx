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
      className="bg-base-200 border-base-content border-4 rounded-xl shadow-xl shadow-purple-500/50 p-16 mx-auto"
      onSubmit={handleSubmit}
    >
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
          className="p-4 text-neutral-900 rounded-xl shadow-xl shadow-purple-500/50 "
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
          className="p-4 text-neutral-900 rounded-xl shadow-xl shadow-purple-500/50 "
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
          className="p-4 text-neutral-900 rounded-xl shadow-xl shadow-purple-500/50 "
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
          rows={4}
          required
          minLength={10}
          maxLength={500}
          value={formData.message}
          onChange={handleInputChange}
          name="message"
          id="message"
          className="w-full p-4 text-neutral-900 rounded-xl shadow-xl shadow-purple-500/50 "
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className=" mt-4 w-40 btn btn-secondary font-bold "
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
