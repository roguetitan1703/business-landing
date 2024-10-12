import React, { useState } from "react";

// const GlowingText = ({ text, glowColor }) => {
//   return (
//     <h3
//       className={`text-5xl font-bold mb-3`}
//       style={{
//         textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
//       }}
//     >
//       {text}
//     </h3>
//   );
// };

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send email or perform other actions
    console.log("Form submitted:", {
      name,
      companyName,
      title,
      phone,
      email,
      message,
    });
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

export default GetInTouch;
