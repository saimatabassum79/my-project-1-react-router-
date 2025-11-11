import React from 'react';
import Heading from '../Shared/Heading';
import { FaPhone } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8 lg:px-24 py-12">
            {/* Heading */}
            <div className="text-center mb-12">
                <Heading
                    heading="Contact"
                    colorHeading="With Us"
                    description="Customer service should not be a department. It should be the entire company."
                />
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Phone */}
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl text-[#5CAF90] bg-green-50 p-3 rounded-full mb-3">
                        <FaPhone />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">01753924093</p>
                    <p className="text-gray-600">01753924094</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl text-[#5CAF90] bg-green-50 p-3 rounded-full mb-3">
                        <MdOutlineMail />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@example.com</p>
                    <p className="text-gray-600">support@example.com</p>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl text-[#5CAF90] bg-green-50 p-3 rounded-full mb-3">
                        <CiLocationOn />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600 text-center">
                        Ruami Mello Moraes Filho, 987 - Salvador - MA, 40352, Brazil.
                    </p>
                </div>
            </div>

            {/* Map & Contact Form */}
            <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Map */}
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5254.062203577742!2d90.40840517598211!3d23.77985165974876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1762890347353!5m2!1sen!2sbd"
                        className="w-full h-80 sm:h-96 border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-1/2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
                    <form className="flex flex-col gap-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full text-sm py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5CAF90] transition"
                        />
                        <input
                            type="text"
                            placeholder="Your Phone"
                            className="w-full text-sm py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5CAF90] transition"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full py-2 text-sm px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5CAF90] transition"
                        />
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full py-2 text-sm px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5CAF90] transition resize-none"
                        ></textarea>
                        <button className="bg-[#5CAF90] hover:bg-[#27a778] text-white py-2 rounded-md font-semibold transition-all duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;