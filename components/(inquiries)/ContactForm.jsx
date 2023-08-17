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
      className="bg-base-200 border-base-content border-l-4 border-t-4 rounded-3xl shadow-2xl shadow-purple-800/50 px-4 xs:px-8 py-4 lg:px-12 lg:py-8 xl:px-16 xl:py-12 2xl:px-20 2xl:py-16"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-7xl mt-4 lg:mt-2 xl:mt-0 mb-4 hover:text-info">
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
          className="w-full p-3 lg:p-4 text-neutral-900 rounded-xl shadow-xl shadow-purple-800/50 "
          name="message"
          id="message"
        />
      </div>
      <hr className="my-6 border-secondary" />
      <div className="flex justify-center xs:justify-end">
        <button
          type="submit"
          disabled={loading}
          className="btn btn-md btn-secondary mb-4 mt-4 w-40 xl:w-44 3xl:w-48 3xl:btn-lg"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
