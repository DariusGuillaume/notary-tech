import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-100 dark:bg-navy-900 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex flex-col justify-center h-full">
              <div className="mb-8">
                <span className="block w-[30px] h-[2px] bg-blue-600 mb-2"></span>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Say Hello</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MailIcon className="w-6 h-6 text-blue-600 dark:text-white mr-4" />
                  <p className="text-gray-600 dark:text-white">Vlordtucker@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="bg-white p-8 dark:bg-[#D3D3D3] rounded-lg shadow-md">
            <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 placeholder-gray-400"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 placeholder-gray-400"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 placeholder-gray-400"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your message"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 placeholder-gray-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
