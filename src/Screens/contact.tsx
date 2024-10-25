import React, { useState } from "react";
import { db } from "../firebase"; // Adjust the path according to your structure
import { collection, addDoc } from "firebase/firestore"; // Import necessary Firestore functions
import Swal from "sweetalert2"; // Import SweetAlert2
import axios from "axios";
const BOT_TOKEN = process.env.REACT_APP_BOT_TOKEN;
const CHAT_ID = process.env.REACT_APP_CHAT_ID;

const Contact = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new document in the "contacts" collection
      await addDoc(collection(db, "contacts"), {
        name,
        companyName,
        title,
        phone,
        email,
        message,
      });
      const telegramMessage = `
      New Lead Form Website form:
      - Name: ${name}
      - Company: ${companyName}
      - Title: ${title}
      - Phone: ${phone}
      - Email: ${email}
      - Message: ${message}
    `;
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: telegramMessage,
        parse_mode: "HTML",
      });
      // Show success message using SweetAlert
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We’ll get back to you soon.",
        confirmButtonText: "OK",
        background: "#131314", // Optional: set background color to match your app's theme
        color: "#00bfff", // Optional: text color
        confirmButtonColor: "#00bfff", // Optional: button color
      });

      // Optionally, reset the form after submission
      setName("");
      setCompanyName("");
      setTitle("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      // Optionally, show an error message
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        confirmButtonText: "OK",
        background: "#131314", // Optional
        color: "#00bfff", // Optional
        confirmButtonColor: "#00bfff", // Optional
      });
    }
  };

  return (
    <div id={"git"} className="bg-[#131314] text-slate-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="p-4 rounded-lg">
          <p
            className="text-lg uppercase font-extrabold mb-4"
            style={{ color: "#00bfff" }}
          >
            Get in touch
          </p>
          <h5 className="mb-16 text-5xl">What can we solve for you today?</h5>
          <div className="rounded-md border border-slate-50 p-12">
            <form onSubmit={handleSubmit}>
              {/* Form fields go here */}
              <div className="mb-4 flex flex-row items-center">
                <label
                  htmlFor="name"
                  className="w-1/4 block text-sm font-medium mb-2"
                >
                  Hi, my name is
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-3/4 bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="a pizza guy"
                />
              </div>
              <div className="mb-4 flex flex-row items-center">
                <label
                  htmlFor="companyName"
                  className="w-1/4 block text-sm font-medium mb-2"
                >
                  I represent
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-3/4 bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  placeholder="the pizza corp"
                />
              </div>
              <div className="mb-4 flex flex-row items-center">
                <label
                  htmlFor="title"
                  className="w-1/4 block text-sm font-medium mb-2"
                >
                  Now let's chat about
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-3/4 bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="pizzas!"
                />
              </div>
              <div className="mb-4 flex flex-row items-center">
                <label
                  htmlFor="message"
                  className="w-1/4 block text-sm font-medium mb-2"
                >
                  So listen
                </label>
                <textarea
                  id="message"
                  className="w-3/4 bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-2 h-16 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="I love extra cheese and toppings on my pizza"
                ></textarea>
              </div>
              <div className="mb-4 flex flex-row items-center">
                <label
                  htmlFor="phone"
                  className="w-1/4 block text-sm font-medium mb-2"
                >
                  You can call me on
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-3/4 bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="1234567890"
                  maxLength={10}
                />
              </div>
              <div className="mb-4 flex flex-row items-center">
                <label
                  htmlFor="email"
                  className="w-1/4 block text-sm font-medium mb-2"
                >
                  and mail me @
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-3/4 bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="mailme@here.com"
                />
              </div>
              <div className="mt-8 flex flex-row justify-end">
                <button className="rounded-full flex flex-row items-center px-8 py-2 bg-white text-black hover:bg-opacity-0 hover:text-white hover:ring-white hover:ring-1 transition-all ease-in-out duration-150">
                  <p className="font-heading">Submit</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
